
var testbench = [
  ['25xxxxx','525xxxxx'],
  ['421xxxx','5421xxxx'],
  ['422xxxx','5422xxxx'],
  ['423xxxx','5423xxxx'],
  ['428xxxx','5428xxxx'],
  ['429xxxx','5429xxxx'],
  ['49xxxxx','549xxxxx'],
  ['7xxxxxx','57xxxxxx'],
  ['875xxxx','5875xxxx'],
  ['876xxxx','5876xxxx'],
  ['877xxxx','5877xxxx'],
  ['878xxxx','5878xxxx'],
  ['871xxxx','5871xxxx'],
  ['91xxxxx','591xxxxx'],
  ['92xxxxx','592xxxxx'],
  ['93xxxxx','593xxxxx'],
  ['94xxxxx','594xxxxx'],
  ['95xxxxx','595xxxxx'],
  ['96xxxxx','596xxxxx'],
  ['97xxxxx','597xxxxx'],
  ['98xxxxx','598xxxxx'],
  ['91xxxxx','591xxxxx'],
  ['21xxxxx','21xxxxx'],

  ['+23025xxxxx','+230525xxxxx'],
  ['+230421xxxx','+2305421xxxx'],
  ['+230422xxxx','+2305422xxxx'],
  ['+230423xxxx','+2305423xxxx'],
  ['+230428xxxx','+2305428xxxx'],
  ['+230429xxxx','+2305429xxxx'],
  ['+23049xxxxx','+230549xxxxx'],
  ['+2307xxxxxx','+23057xxxxxx'],
  ['+230875xxxx','+2305875xxxx'],
  ['+230876xxxx','+2305876xxxx'],
  ['+230877xxxx','+2305877xxxx'],
  ['+230878xxxx','+2305878xxxx'],
  ['+230871xxxx','+2305871xxxx'],
  ['+23091xxxxx','+230591xxxxx'],
  ['+23092xxxxx','+230592xxxxx'],
  ['+23093xxxxx','+230593xxxxx'],
  ['+23094xxxxx','+230594xxxxx'],
  ['+23095xxxxx','+230595xxxxx'],
  ['+23096xxxxx','+230596xxxxx'],
  ['+23097xxxxx','+230597xxxxx'],
  ['+23098xxxxx','+230598xxxxx'],
  ['+23091xxxxx','+230591xxxxx'],
  ['+23021xxxxx','+23021xxxxx'],

  ['23025xxxxx','230525xxxxx'],
  ['230421xxxx','2305421xxxx'],
  ['230422xxxx','2305422xxxx'],
  ['230423xxxx','2305423xxxx'],
  ['230428xxxx','2305428xxxx'],
  ['230429xxxx','2305429xxxx'],
  ['23049xxxxx','230549xxxxx'],
  ['2307xxxxxx','23057xxxxxx'],
  ['230875xxxx','2305875xxxx'],
  ['230876xxxx','2305876xxxx'],
  ['230877xxxx','2305877xxxx'],
  ['230878xxxx','2305878xxxx'],
  ['230871xxxx','2305871xxxx'],
  ['23091xxxxx','230591xxxxx'],
  ['23092xxxxx','230592xxxxx'],
  ['23093xxxxx','230593xxxxx'],
  ['23094xxxxx','230594xxxxx'],
  ['23095xxxxx','230595xxxxx'],
  ['23096xxxxx','230596xxxxx'],
  ['23097xxxxx','230597xxxxx'],
  ['23098xxxxx','230598xxxxx'],
  ['23091xxxxx','230591xxxxx'],
  ['23021xxxxx','23021xxxxx'],

  ['23098x-xxxx','230598xxxxx'],
  ['23091xx xxx','230591xxxxx'],
  ['230-98xxxxx','230598xxxxx'],
  ['2 3091xxxxx','230591xxxxx'],

];

for (var i = testbench.length - 1; i >= 0; i--)
{
  add5result = algoadd5(testbench[i][0]);
  if( add5result == testbench[i][1] )
  {
    console.info('adding  :  ' + testbench[i][0] + '  =>  ' + testbench[i][1] + '  :  good!');
  }
  else
  {
    console.error('adding  :  ' + 'error!  :  ' + testbench[i][0] + '  =>  ' + add5result + '  instead of  ' + testbench[i][1]);
  }

  remove5result = algoremove5(testbench[i][1]);
  if( remove5result == removeSpecChars( testbench[i][0] ) )
  {
    console.info('removing  :  ' + testbench[i][1] + '  =>  ' + testbench[i][0] + '  :  good!');
  }
  else
  {
    console.error('removing  :  ' + 'error!  :  ' + testbench[i][1] + '  =>  ' + remove5result + '  instead of  ' + testbench[i][0]);
  }

};

