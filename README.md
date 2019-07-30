**Status:** code is provided as-is, no updates expected

# The Operational Cost of Ethereum Airdrops

This repo contains the simulation and visualization code of the following paper: https://arxiv.org/abs/1907.12383.


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
Output of the simulation is already computed and can be used without rerun:
```
simulation.csv
```

### Visualizing experiment data

Visualization code as well as the tikz export can be found in the following (Jupyter/ipython) notebook. 

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
 @article{frowis_operational_2019,
	title = {The {Operational} {Cost} of {Ethereum} {Airdrops}},
	url = {http://arxiv.org/abs/1907.12383},
	abstract = {Efficient transfers to many recipients present a host of issues on Ethereum. First, accounts are identified by long and incompressible constants. Second, these 
        constants have to be stored and communicated for each payment. Third, the standard interface for token transfers does not support lists of recipients, adding repeated communication to the overhead. Since Ethereum charges resource usage, even small optimizations translate to cost savings. Airdrops, a 
        popular marketing tool used to boost coin uptake, present a relevant example for the value of optimizing bulk transfers. Therefore, we review technical solutions for airdrops of Ethereum-based tokens, discuss features and prerequisites, and compare the operational costs by simulating 35 scenarios. We 
        find that cost savings of factor two are possible, but require specific provisions in the smart contract implementing the token system. Pull-based approaches, which use on-chain interaction with the recipients, promise moderate savings for the distributor while imposing a disproportional cost on each 
        recipient. Total costs are broadly linear in the number of recipients independent of the technical approach. We publish the code of the simulation framework for reproducibility, to support future airdrop decisions, and to benchmark innovative bulk payment solutions.},
	urldate = {2019-07-30},
	journal = {arXiv:1907.12383 [cs]},
	author = {Fröwis, Michael and Böhme, Rainer},
	month = jul,
	year = {2019},
	note = {arXiv: 1907.12383},
	keywords = {Computer Science - Cryptography and Security, Computer Science - Data Structures and Algorithms, Computer Science - Software Engineering}
}
```
