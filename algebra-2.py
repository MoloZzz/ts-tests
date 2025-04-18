from sympy import *

# Оголошуємо змінні
x, y, z = symbols('x y z')

def leading_term(poly, order='lex', vars=(x, y, z)):
    """Знаходить провідний член полінома за заданим порядком."""
    if poly == 0:
        return 0, 0
    # Отримуємо мономи та їх коефіцієнти
    terms = poly.as_ordered_terms(order=order)
    leading = terms[0]
    coeff = poly.coeffs(order=order)[0]
    return leading, coeff

def lcm_monomials(m1, m2, vars=(x, y, z)):
    """Знаходить НСК двох мономів."""
    if m1 == 0 or m2 == 0:
        return 0
    # Перетворюємо мономи в словники зі степенями
    e1 = m1.as_powers_dict()
    e2 = m2.as_powers_dict()
    # Обчислюємо максимальні степені для кожної змінної
    result = 1
    for var in vars:
        degree = max(e1.get(var, 0), e2.get(var, 0))
        result *= var**degree
    return result

def s_polynomial(f, g, order='lex', vars=(x, y, z)):
    """Обчислює S-поліном для двох поліномів."""
    lt_f, lc_f = leading_term(f, order, vars)
    lt_g, lc_g = leading_term(g, order, vars)
    if lt_f == 0 or lt_g == 0:
        return 0
    # Знаходимо НСК провідних мономів
    lcm = lcm_monomials(lt_f, lt_g, vars)
    # Обчислюємо S-поліном
    s_poly = (lcm / lt_f) * f / lc_f - (lcm / lt_g) * g / lc_g
    return expand(s_poly)

def reduce_polynomial(poly, divisors, order='lex', vars=(x, y, z)):
    """Редукція полінома відносно списку дільників."""
    p = poly
    while p != 0:
        reduced = False
        for d in divisors:
            lt_d, lc_d = leading_term(d, order, vars)
            if lt_d == 0:
                continue
            lt_p, lc_p = leading_term(p, order, vars)
            if lt_p == 0:
                break
            # Перевіряємо, чи ділиться провідний член
            if lt_p.as_powers_dict().items() >= lt_d.as_powers_dict().items():
                # Виконуємо редукцію
                factor = lt_p / lt_d * lc_p / lc_d
                p = p - factor * d
                p = expand(p)
                reduced = True
                break
        if not reduced:
            break
    return p

def groebner(polynomials, order='lex', vars=(x, y, z)):
    """Обчислює базис Грьобнера за алгоритмом Бухбергера."""
    G = list(polynomials)
    pairs = [(i, j) for i in range(len(G)) for j in range(i + 1, len(G))]
    
    while pairs:
        i, j = pairs.pop(0)
        # Обчислюємо S-поліном
        s_poly = s_polynomial(G[i], G[j], order, vars)
        # Редукція S-полінома
        remainder = reduce_polynomial(s_poly, G, order, vars)
        
        if remainder != 0:
            # Додаємо новий поліном до базису
            G.append(remainder)
            # Оновлюємо список пар
            for k in range(len(G) - 1):
                pairs.append((k, len(G) - 1))
    
    # Нормалізуємо базис (опціонально)
    G_normalized = []
    for g in G:
        if g != 0:
            _, lc = leading_term(g, order, vars)
            g_normalized = g / lc
            G_normalized.append(g_normalized)
    
    return G_normalized

# Визначаємо поліноми системи
f1 = x**2 - 1
f2 = x*y - y
f3 = x*z + z

# Формуємо список поліномів
polynomials = [f1, f2, f3]

# Обчислюємо базис Грьобнера
groebner_basis = groebner(polynomials, order='lex', vars=(x, y, z))

# Виводимо базис Грьобнера
print("Базис Грьобнера:")
for poly in groebner_basis:
    print(poly)