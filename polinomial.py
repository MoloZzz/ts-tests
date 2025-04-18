def find_divisors(n):
    """Знаходить усі цілі дільники числа n."""
    divisors = set()
    for i in range(1, int(abs(n)**0.5) + 1):
        if n % i == 0:
            divisors.add(i)
            divisors.add(-i)
            divisors.add(n // i)
            divisors.add(-n // i)
    return sorted(list(divisors))

def evaluate_polynomial(coeffs, x_val):
    """Обчислює значення полінома за заданих коефіцієнтів та значення x."""
    result = 0
    for i, coeff in enumerate(reversed(coeffs)):
        result += coeff * (x_val ** i)
    return result

def polynomial_division(dividend_coeffs, divisor_coeffs):
    """Виконує поліноміальне ділення."""
    if len(divisor_coeffs) > len(dividend_coeffs):
        return [0], dividend_coeffs

    quotient_coeffs = [0] * (len(dividend_coeffs) - len(divisor_coeffs) + 1)
    remainder_coeffs = list(dividend_coeffs)

    for i in range(len(quotient_coeffs)):
        if remainder_coeffs[0] == 0:
            remainder_coeffs.pop(0)
            continue

        leading_dividend = remainder_coeffs[0]
        leading_divisor = divisor_coeffs[0]
        quotient = leading_dividend / leading_divisor
        quotient_coeffs[i] = quotient

        temp_coeffs = [coeff * quotient for coeff in divisor_coeffs]

        if len(temp_coeffs) < len(remainder_coeffs):
            padding = [0] * (len(remainder_coeffs) - len(temp_coeffs))
            temp_coeffs.extend(padding)
        elif len(temp_coeffs) > len(remainder_coeffs):
            padding = [0] * (len(temp_coeffs) - len(remainder_coeffs))
            remainder_coeffs.extend(padding)

        remainder_coeffs = [remainder_coeffs[j] - temp_coeffs[j] for j in range(len(remainder_coeffs))]
        while remainder_coeffs and remainder_coeffs[0] == 0:
            remainder_coeffs.pop(0)

    return quotient_coeffs, remainder_coeffs

def kronecker_factorization_manual(poly_coeffs):
    """Спрощена спроба розкладання полінома методом Кронекера."""
    if not poly_coeffs:
        return []

    if len(poly_coeffs) == 1:
        return [poly_coeffs[0]]

    factors = []

    # Крок 1: Винесення спільного множника x
    if poly_coeffs[-1] == 0:
        power = 0
        temp_coeffs = list(poly_coeffs)
        while temp_coeffs and temp_coeffs[-1] == 0:
            temp_coeffs.pop()
            power += 1
        if power > 0:
            factors.extend(['x'] * power)
        poly_coeffs = temp_coeffs

    if not poly_coeffs or len(poly_coeffs) == 1:
        return factors

    # Крок 2: Пошук можливих цілих коренів (спрощено)
    leading_coeff = poly_coeffs[0]
    constant_coeff = poly_coeffs[-1]

    if constant_coeff == 0:
        return factors  # Вже оброблено вище

    possible_roots = find_divisors(constant_coeff)

    for root in possible_roots:
        if evaluate_polynomial(poly_coeffs, root) == 0:
            factors.append(f'(x - {root})')
            # Спрощене ділення (лише на лінійний множник)
            quotient_coeffs = polynomial_division(poly_coeffs, [1, -root])[0]
            return factors + kronecker_factorization_manual(quotient_coeffs) # Рекурсивний виклик

    # Спрощена обробка для випадку, коли цілі корені не знайдено одразу
    # У повному методі Кронекера потрібно розглядати множники значень полінома в точках.
    return [f'({polynomial_to_string(poly_coeffs)})'] # Повертаємо нерозкладений залишок

def polynomial_to_string(coeffs):
    """Перетворює коефіцієнти полінома в рядок."""
    terms = []
    degree = len(coeffs) - 1
    for i, coeff in enumerate(coeffs):
        if coeff != 0:
            power = degree - i
            term = ""
            if coeff != 1 or power == 0:
                term += str(coeff)
            if power > 0:
                term += "x"
                if power > 1:
                    term += f"^{power}"
            terms.append(term)
    return " + ".join(terms)

# Коефіцієнти полінома 3x^5+19x^4+3x^3-171x^2-270x , завдання 21 Євчика Олексія
initial_coefficients = [3, 19, 3, -171, -270, 0]

result = kronecker_factorization_manual(initial_coefficients)
print(f"Розклад полінома на множники 3x^5+19x^4+3x^3-171x^2-270x: {result}")
