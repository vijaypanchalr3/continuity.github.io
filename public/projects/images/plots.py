import matplotlib.pyplot as plt
import numpy as np



data = np.linspace(-30,30,2000)
x = np.zeros(len(data))
y = np.zeros(len(data))
z = np.zeros(len(data))





for i in range(len(data)):
    x[i] = 2.917*np.sin(data[i])
s = 0
logic = 1
for i in range(len(data)):
    T = 5
    if s>=5:
        logic = logic*(-1)
        s = 0
    s+=0.03
    y[i] = logic*2.11

logic = 1
s = 0
for i in range(len(data)-1):
    if y[i]>0:
        z[i+1]=z[i]+0.03
    else:
        z[i+1]=z[i]-0.03
fig, axs = plt.subplots(3)
axs[0].plot(data, x)
axs[0].set_title('sine wave output')
axs[1].plot(data, y, 'tab:orange')
axs[1].set_title('square wave output')
axs[2].plot(data, z, 'tab:green')
axs[2].set_title('triangular wave output')
# axs[1, 1].plot(x, -y, 'tab:red')
# axs[1, 1].set_title('Axis [1, 1]')

for ax in axs.flat:
    ax.set(xlabel='x-label', ylabel='y-label')

# Hide x labels and tick labels for top plots and y ticks for right plots.
for ax in axs.flat:
    ax.label_outer()
plt.show()
