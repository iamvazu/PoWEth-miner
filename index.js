
var scrypt = require('scrypt')

const Miner = require("./powethminer");

const Vault = require("./lib/vault");


const miningLogger = require("./lib/mining-logger");

var prompt = require('prompt');


var pjson = require('./package.json');


var Web3 = require('web3')

var NetworkInterface = require("./lib/network-interface");


var web3 = new Web3( );




var running = true;

console.log('Welcome to PoWEth Miner!')
console.log('Version: ',pjson.version)
console.log('\n')
console.log('Type a command to get started.  Type "help" for a list of commands.')
console.log('\n')

async function initPrompt()
{


    var result = await promptForCommand();

    initPrompt();

}

async function promptForCommand()
{
  return new Promise(function (fulfilled,rejected) {
    prompt.start();
    prompt.get(['command'], async function (err, result) {

      if(err){
        console.log(err);
        rejected(err);
      }else{
        var response = await handleCommand(result)
        fulfilled( response );
      }

    });
  });
}


initPrompt();


/*


if (process.argv.length <= 2) {
console. log("Please add a subsystem parameter (use 'npm run help' for help)");
process. exit(-1);
}

var subsystem_name =  process.argv[2] ;
var subsystem_command =  process.argv[3] ;
var subsystem_option =  process.argv[4] ;

*/


async function handleCommand(result)
{


  var split_command = result.command.split(' ');
  //console.log( split_command )

  var subsystem_name =  split_command[0] ;
  var subsystem_command =  split_command[1] ;
  var subsystem_option =  split_command[2] ;


  if(subsystem_name == 'account')
  {
    await Vault.init(web3,miningLogger);

    await Vault.handleAccountCommand(subsystem_command,subsystem_option)
  }

  if(subsystem_name == 'contract')
  {
    await Vault.init(web3,miningLogger);

    await Vault.handleContractCommand(subsystem_command,subsystem_option)
  }

  if(subsystem_name == 'config')
  {
    await Vault.init(web3,miningLogger);

    await Vault.handleConfigCommand(subsystem_command,subsystem_option)
  }

  if(subsystem_name == 'mine')
  {
    await Vault.init(web3, miningLogger);



    NetworkInterface.init(web3, Vault, miningLogger);

    Miner.init( web3 ,  subsystem_command, Vault, NetworkInterface, miningLogger );
  }

  if(subsystem_name == 'help')
  {
    console.log('\n\n')
    console.log('--PoWEth Miner Help--\n')
    console.log('Available commands:\n')
    console.log('"account new" - Create a new mining account ')
    console.log('"account list" - List all mining accounts ')
    console.log('"account select 0x####" - Select a primary mining account by address ')
    console.log('"account balance" - List the ether and token balance of your selected account ')

    console.log('"contract list" - List the selected token contract to mine')
    console.log('"contract select 0x####" - Select a PoW token contract to mine ')

    console.log('"config list" - Show your current configuration')
    console.log('"config gasprice #" - Set the gasprice used to submit PoW to the token smartcontract ')
    console.log('"config cpu_threads #" - Set the number of CPU cores to use for mining ')
    console.log('"config web3provider http://----:####" - Set the web3 provider url for submitting ethereum transactions ')


    console.log('"mine" - Begin mining ')

  //  console.log('\n')
  //  console.log('Encrypted data vault stored at '+ Vault.getpowethnLocalFolderPath())

    console.log('\n\n')
  }


}
//init();
