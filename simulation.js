const assert = require('assert')

const BLOCKGASLIMIT=6712392  // TODO put max
const DROPAMOUNT=500
const DEBUG = process.argv.length < 4
const EXT_WEB3 = false
const TX_GAS=BLOCKGASLIMIT * 20000
const ETH_BALANCE = 10000000000
const GAS_PRICE = 1

// TODOS
// set gas limit and handling for batch, gas limit as line in diagram....
// add approve batch
// 


var erc20Contract = [{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256[]"}],"name":"airdropDynamic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256[]"}],"name":"airdropApproveDynamic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"amount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256"}],"name":"airdropApprove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256"}],"name":"airdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]
//[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256[]"}],"name":"airdropDynamic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"},{"name":"amount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256"}],"name":"airdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]
var airdropperContract = [{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256[]"}],"name":"airdropDynamic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256[]"}],"name":"airdropApproveDynamic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256"}],"name":"airdropApprove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256"}],"name":"airdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_token","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
//[{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256[]"}],"name":"airdropDynamic","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_amount","type":"uint256"}],"name":"airdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_token","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]



let outp = console.log
let outp_csv = (arr) => outp(arr.reduce((sum, item) => `${sum};${item}`, "").slice(1))
let range = (start, step, steps) => Array.from({length: steps}, (x,i) => start + (i * step))

function debugp(a) {
  if(DEBUG) console.error("DEBUG: " + a)
}

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    var R = [];
    for (var i = 0; i < this.length; i += chunkSize)
      R.push(this.slice(i, i + chunkSize));
    return R;
  }
});

async function deploy(abi, code, params, senderUOA){
  debugp(`deploy from account ${senderUOA} with params ${params}`)

  return await abi.deploy({
      data: code,
      arguments: params
  }).send({
      from: senderUOA,
      gas: 1500000,
      gasPrice: GAS_PRICE
  },(err, tx) => {
    if(err) throw err
  })
}

async function readFile(file) {
   var fs = require('fs');
   const { promisify } = require('util')
   const readFileAsync = promisify(fs.readFile)
   const res = await readFileAsync(file, 'utf8')

   return res
}

async function deploy_infra(web3, senderUOA) {
      var f1 =  await readFile('./erc20_zeppelin_5.0_ad.bin')
      var f2 =  await readFile('./airdropper_5.0.bin')

      res1 = await deploy(new web3.eth.Contract(erc20Contract), f1, null, senderUOA)
      debugp(`ERC20 is deployed on ${res1.options.address}`)
      res2 = await deploy(new web3.eth.Contract(airdropperContract), f2, [res1.options.address], senderUOA) 
      debugp(`Airdropper is deployed on ${res2.options.address}`)
      debugp(`Token is set to ${await res2.methods.token().call()}`)

      return {"airdropper": res2, "token": res1 }
}

async function mint(infra, amount, senderUOA, drop_to){
  debugp(`minting for ${senderUOA}`)
  return await infra.token.methods.mint(drop_to, amount).send({from: senderUOA})
}

async function setup_accounts(nr_recievers) {
  const Web3 = require('web3');
  let web3 = null
  if(EXT_WEB3) {
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8588"));
  } else {
    const ganache = require('ganache-cli');
    web3 = new Web3(ganache.provider({"total_accounts": nr_recievers + 2, "default_balance_ether": ETH_BALANCE, "gasLimit": TX_GAS}))
  }
  
  let accounts = await web3.eth.getAccounts()
  let senderUOA = accounts[0]
  receivers = accounts.slice(1, nr_recievers + 1)

  return [senderUOA, receivers, web3]
}

async function prepare_env(web3, nr_recievers, senderUOA, mint_on_Airdropper_c) {
  debugp(`Creating simulation env: ${nr_recievers}`)

  infra = await deploy_infra(web3 ,senderUOA)

  let mint_to_addr = (mint_on_Airdropper_c) ? infra.airdropper.options.address : senderUOA

  await mint(infra, DROPAMOUNT * (nr_recievers + 1), senderUOA , mint_to_addr)
  
  return infra
}

async function getBalance(infra, web3, account) {
  let eth_balance = await web3.eth.getBalance(account)
  let erc_balance = await infra.token.methods.balanceOf(account).call()
  return [eth_balance, erc_balance]
}

async function simulate_naive_push(infra, amount, recievers, oneAmount, senderUOA){
  debugp(`Naive push: starting simulation ${recievers.length} get ${amount} all the same ${oneAmount}`)

  return await recievers.reduce( async (sum, reciever) => {
    let receipt = await infra.token.methods.transfer(reciever, amount).send({from: senderUOA, gas: TX_GAS, gasPrice: GAS_PRICE})
    let acc = await sum
    debugp(`Drop to ${reciever} gas used ${receipt.gasUsed}, ${receipt.cumulativeGasUsed} `)
    return receipt.cumulativeGasUsed + acc 
  }, Promise.resolve(0))
}

async function simulate_batch_push(infra, against, amount, reciever_batches, oneAmount, senderUOA){
  debugp(`${against} Batch: starting simulation ${reciever_batches.length} tx everyone gets ${amount} all the same ${oneAmount}`)

  return await reciever_batches.reduce( async (sum, reciever_batch) => {
    let receipt = null
    if(oneAmount){
      receipt = await infra[against].methods.airdrop(reciever_batch, amount).send({from: senderUOA, gas: TX_GAS, gasPrice: GAS_PRICE})
    }else{
      receipt = await infra[against].methods.airdropDynamic(reciever_batch, Array(reciever_batch.length).fill(amount)).send({from: senderUOA, gas: TX_GAS, gasPrice: GAS_PRICE})
    }
    
    let acc = await sum
    debugp(`Drop to ${reciever_batch.length} per tx gas used ${receipt.gasUsed}, ${receipt.cumulativeGasUsed} this is ${receipt.cumulativeGasUsed / BLOCKGASLIMIT} of the block gas limit`)
    return receipt.cumulativeGasUsed + acc 
  }, Promise.resolve(0))
}


async function simulate_batch_pull(infra, against, amount, reciever_batches, oneAmount, senderUOA, user_sum){
  debugp(`${against} Batch: starting simulation on token ${infra.token.options.address} ${reciever_batches.length} tx everyone gets ${amount} all the same ${oneAmount}`)

  return await reciever_batches.reduce( async (sum, reciever_batch) => {
      let receipt = null
      if(oneAmount){
        receipt = await infra[against].methods.airdropApprove(reciever_batch, amount).send({from: senderUOA, gas: TX_GAS, gasPrice: GAS_PRICE})
      } else {
        receipt = await infra[against].methods.airdropApproveDynamic(reciever_batch, Array(reciever_batch.length).fill(amount)).send({from: senderUOA, gas: TX_GAS, gasPrice: GAS_PRICE})
      }
    
      let acc = await sum
      debugp(`Drop to ${reciever_batch.length} per tx gas used ${receipt.gasUsed}, ${receipt.cumulativeGasUsed} for the user this is ${receipt.cumulativeGasUsed / BLOCKGASLIMIT} of the block gas limit`)
      return receipt.cumulativeGasUsed + acc 
  }, Promise.resolve(0)).then(async (sum) => {
        if (!user_sum) return sum
        return await Array.prototype.concat.apply([], reciever_batches).reduce( async (nsum, x) => {
                                                                                    let acc = await nsum
                                                                                    // try {
                                                                                    let r = await infra.token.methods.transferFrom(senderUOA, x, amount).send({from: x, gas: TX_GAS, gasPrice: GAS_PRICE})
                                                                                    debugp(`pull ${reciever_batches.length} tranferFrom on ${infra.token.options.address} ${x} ${r.cumulativeGasUsed} ${acc}`)
                                                                                    // } catch(e) {

                                                                                    //   let abc = await infra.token.methods.allowance(senderUOA, x).call()
                                                                                    //   debugp("ahhh" + e)
                                                                                    //   debugp(`${senderUOA};${x};${amount};${abc}`)
                                                                                    //   //debugp(reciever_batch.length)
                                                                                    // }
                                                                                     //allowance = await infra.token.methods.allowance(senderUOA, x).call()
                                                                                    
                                                                                    
                                                                                    return r.cumulativeGasUsed + acc
                                                                                  }, Promise.resolve(0))
  })
}

async function main() {
  let param_nr_receiver = parseInt(process.argv[2])
  let [senderUOA, recievers, web3] = await setup_accounts(param_nr_receiver)

  debugp(`Dropper UOA ACOUNT is: ${senderUOA}`)
  assert(param_nr_receiver === recievers.length)

 
  // SIMULATIONS
  
  // N_P
  let infra = await prepare_env(web3, param_nr_receiver, senderUOA, false)
  np = await simulate_naive_push(infra, DROPAMOUNT, recievers, false, senderUOA)

  // //debugp(`After mint ${await getBalance(infra, web3, senderUOA)}`)

  batch_ranges = range(100, 100, 4)

  //EB_P_OA
  external_batch_one_amount = await batch_ranges.reduce(async (acc, chunk_size) => {
    let before = await acc
    let rel_account = "airdropper"
    infra = await prepare_env(web3, param_nr_receiver, senderUOA, true)
    return before.concat([await simulate_batch_push(infra, rel_account, DROPAMOUNT, recievers.chunk(chunk_size), true, senderUOA)])
  }, Promise.resolve([]))

  //EB_P
  external_batch = await batch_ranges.reduce(async (acc, chunk_size) => {
    let before = await acc
    let rel_account = "airdropper"
    infra = await prepare_env(web3, param_nr_receiver, senderUOA, true)
    return before.concat([await simulate_batch_push(infra, rel_account, DROPAMOUNT, recievers.chunk(chunk_size), false, senderUOA)])
  }, Promise.resolve([]))

  //IB_P_OA
  internal_batch_one_amount = await batch_ranges.reduce(async (acc, chunk_size) => {
    let before = await acc
    let rel_account = "token"
    infra = await prepare_env(web3, param_nr_receiver, senderUOA, false)
    return before.concat([await simulate_batch_push(infra, rel_account, DROPAMOUNT, recievers.chunk(chunk_size), true, senderUOA)])
  }, Promise.resolve([]))

  //IB_P
  internal_batch = await batch_ranges.reduce(async (acc, chunk_size) => {
    let before = await acc
    let rel_account = "token"
    infra = await prepare_env(web3, param_nr_receiver, senderUOA, false)
    return before.concat([await simulate_batch_push(infra, rel_account, DROPAMOUNT, recievers.chunk(chunk_size), false, senderUOA)])
  }, Promise.resolve([]))

  //IB_PL_OA
  internal_batch_pull_one_amount = await batch_ranges.reduce(async (acc, chunk_size) => {
    let before = await acc
    let rel_account = "token"
    infra = await prepare_env(web3, param_nr_receiver, senderUOA, false)
    return before.concat([await simulate_batch_pull(infra, rel_account, DROPAMOUNT, recievers.chunk(chunk_size), true, senderUOA, false)])
  }, Promise.resolve([]))

  //IB_PL
  internal_batch_pull = await batch_ranges.reduce(async (acc, chunk_size) => {
    let before = await acc
    let rel_account = "token"
    infra = await prepare_env(web3, param_nr_receiver, senderUOA, false)
    return before.concat([await simulate_batch_pull(infra, rel_account, DROPAMOUNT, recievers.chunk(chunk_size), false, senderUOA, false)])
  }, Promise.resolve([]))

  //IB_PL_OA_UC
  internal_batch_pull_one_amount_user = await batch_ranges.reduce(async (acc, chunk_size) => {
    let before = await acc
    let rel_account = "token"
    infra = await prepare_env(web3, param_nr_receiver, senderUOA, false)

    return before.concat([await simulate_batch_pull(infra, rel_account, DROPAMOUNT, recievers.chunk(chunk_size), true, senderUOA, true)])
  }, Promise.resolve([]))

  console.error(internal_batch_pull_one_amount_user)

  //IB_PL_UC
  internal_batch_pull_user = await batch_ranges.reduce(async (acc, chunk_size) => {
    let before = await acc
    let rel_account = "token"
    infra = await prepare_env(web3, param_nr_receiver, senderUOA, false)
    return before.concat([await simulate_batch_pull(infra, rel_account, DROPAMOUNT, recievers.chunk(chunk_size), false, senderUOA, true)])
  }, Promise.resolve([]))
  

  // OUTPUT

  // outp_csv([
  //           "#",
  //           "N_P",
  //           ...batch_ranges.map((x)=>"EB_P_OA_" + x),
  //           ...batch_ranges.map((x)=>"EB_P" + x),
  //           ...batch_ranges.map((x)=>"IB_P_OA" + x),
  //           ...batch_ranges.map((x)=>"IB_P" + x),
  //           ...batch_ranges.map((x)=>"IB_PL_OA" + x),
  //           ...batch_ranges.map((x)=>"IB_PL" + x),
  //           ...batch_ranges.map((x)=>"IB_PL_OA_U" + x),
  //           ...batch_ranges.map((x)=>"IB_PL_U" + x)
  //           ])

  outp_csv([param_nr_receiver, np, ...external_batch_one_amount, ...external_batch, ...internal_batch_one_amount, ...internal_batch, ...internal_batch_pull_one_amount, ...internal_batch_pull, ...internal_batch_pull_one_amount_user, ...internal_batch_pull_user])
}

try {
  main()
} catch(e) {
  console.error(e)
}