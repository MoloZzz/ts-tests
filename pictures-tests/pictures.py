import numpy as np
import matplotlib.pyplot as plt
from scipy.signal import butter, filtfilt

# Завантаження даних з файлу
data_path = 'lab1.txt'
data = np.loadtxt(data_path)

# Параметри фільтра Баттерворта
order = 2  # Порядок фільтра
cutoff_frequency = 0.01  # Частота відсічення фільтра

# Оцінка частоти Найквіста (половина частоти дискретизації)
nyquist = 0.5 * (1 / (data[1] - data[0]))  # Оцінка частоти Найквіста з інтервалу вибірки

# Нормалізація частоти відсічення до частоти Найквіста
normalized_cutoff = cutoff_frequency / nyquist

# Проектування фільтра Баттерворта
b, a = butter(order, normalized_cutoff, btype='low', analog=False)

# Застосування фільтра до сигналу
filtered_data = filtfilt(b, a, data)

# Фур'є спектри
sample_spacing = data[1] - data[0]
freqs = np.fft.fftfreq(len(data), d=sample_spacing)
fft_data = np.fft.fft(data)
fft_filtered = np.fft.fft(filtered_data)

# Амплітудні спектри (лише додатні частоти)
half_len = len(freqs) // 2
positive_freqs = freqs[:half_len]
amplitude_original = np.abs(fft_data)[:half_len]
amplitude_filtered = np.abs(fft_filtered)[:half_len]

# Графіки у часовій області
plt.figure(figsize=(12, 6))
plt.subplot(2, 1, 1)
plt.plot(data, label='Original Signal')
plt.title('Original Signal (Time Domain)')
plt.xlabel('Sample')
plt.ylabel('Amplitude')
plt.grid(True)

plt.subplot(2, 1, 2)
plt.plot(filtered_data, label='Filtered Signal', color='red')
plt.title('Filtered Signal (Time Domain)')
plt.xlabel('Sample')
plt.ylabel('Amplitude')
plt.grid(True)

plt.tight_layout()
plt.show()

# Графіки у частотній області
plt.figure(figsize=(12, 6))
plt.subplot(2, 1, 1)
plt.plot(positive_freqs, amplitude_original)
plt.title('Spectrum of Original Signal')
plt.xlabel('Frequency [Hz]')
plt.ylabel('Amplitude')
plt.grid(True)

plt.subplot(2, 1, 2)
plt.plot(positive_freqs, amplitude_filtered, color='red')
plt.title('Spectrum of Filtered Signal')
plt.xlabel('Frequency [Hz]')
plt.ylabel('Amplitude')
plt.grid(True)

plt.tight_layout()
plt.show()