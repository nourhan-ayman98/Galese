import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans

dataset=make_blobs(n_samples=200,centers=4, n_features=2, cluster_std=1.6, random_state=50)

point=dataset[0]
kmeans=KMeans(n_clusters=4)
kmeans.fit(point)
plt.scatter(dataset[0][:,0], dataset[0][:,1])
clusters=kmeans.cluster_centers_ 
print(clusters)
y_km=kmeans.fit_predict(point)
plt.scatter(point[y_km==0,0],point[y_km==0,1],s=50, color='red')                      
plt.scatter(point[y_km==1,0],point[y_km==1,1],s=50, color='blue')
plt.scatter(point[y_km==2,0],point[y_km==2,1],s=50, color='yellow')
plt.scatter(point[y_km==3,0],point[y_km==3,1],s=50, color='cyan')
plt.scatter(clusters[0][0],clusters[0][1],marker='*',s=200, color='black')
plt.scatter(clusters[1][0],clusters[1][1],marker='*',s=200, color='black')
plt.scatter(clusters[2][0],clusters[2][1],marker='*',s=200, color='black')
plt.scatter(clusters[3][0],clusters[3][1],marker='*',s=200, color='black')
plt.show()