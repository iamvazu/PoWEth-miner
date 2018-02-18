
# PoWEth ERC20 Token Miner

Allow to create PoW ERC20 token, for fair distribution and continuation of Ethereum mining after PoS became real.

Real advantages and use cases:
1. ERC20 Tokens same fast/stable and reliable like Ethereum itself!
2. Support every ERC20 compatiable wallet.
3. Tradeable every ERC20 marketplace.  
4. PoWEth mining doesn't need infinite scaling it is some kind of green token after PoS activated on Ethereum mainnet.

#### Windows
1. Download [/dist/]()

2. Unzip the project and double click on the file 'PoWEth-win' to run

If this does not work, run this file in a terminal with PoWEth-win.exe


#### Mac (build from source)
1. Install Homebrew & Node8
2. brew install yarn
3. clone/download this project
4. open a terminal, cd into the project folder and run 'yarn'
5. run with 'node index.js'

## Building from Source

### Setup (Windows/Mac/Linux)
1. Install NodeJS 8.9
2. Clone this repo
3. run 'npm install yarn -g' to install yarn
4. run 'yarn' to install dependencies for poweth-miner


### Commands

      {commands}
      " help" - Show the help menu
      " account new" - Create a new mining account
      " account list" - List all mining accounts
      " account select 0x####" - Select a primary mining account by address
      " contract list" - List the selected token contract to mine
      " contract select 0x####" - Select a PoW token contract to mine
      " config gasprice #" - Set the gasprice used to submit PoW to the token smartcontract
      " config cpu_threads #" - Set the number of CPU cores to use for mining
      " config web3provider http://----:####" - Set the web3 provider url for submitting ethereum transactions
      " mine" - Begin mining

---------------

### Getting Started
1. Build a new mining account with 'account new'
2. View the private key with 'account list'
3. Write down these credentials
4. Mine poweth tokens with the command 'mine'

Note that it is necessary to fill the mining account (it is an Ethereum account) with a small amount of ether.  Typically 0.005 eth is good enough to get started.  The ether is used for gas to make function calls to the token smart contract when your miner finds a solution to the Proof of Work.  When the gas is spent that means that you have found a solution! If you were the first to find it, you will be rewarded with poweth tokens.  


## Tokens that can be mined using Proof of Work:

1. PoWEth token - http://poweth.org - https://github.com/powether/

## Original repo and idea 

poweth token - https://github.com/poweth/poweth-token