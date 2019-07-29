**Status:** code is provided as-is, no updates expected

# The Operational Cost of Ethereum Airdrops

This repo contains the simulation and visualization code of the following paper: https://arxiv.org/submit/2784902.


### Installation

Install node JS packages for Simulation:
```
npm install
```

### Running
To run the simulation:
```
chmod u+x run_simulation.sh
./run_simulation.sh
```
Output of the simulation is already computed and can be used without rerun.
```
simulation.csv
```

### Visualizing experiment data

Simulation and plotting as well as the tikz export is made in the following notebook. 

```
airdrops_simulation_gh.ipynb
```

Dependencies are listed in the first cell of the notebook and must be installed manually. The packages are pretty standard revolving around the pandas, matplotlib ecosystem:

```
matplotlib2tikz
seaborn
matplotlib
numpy
pandas
tqdm
```



### BibTeX entry

```
announced soon
```