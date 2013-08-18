
var extensions = 
  [
  '25',
  '421',
  '422',
  '423',
  '428',
  '429',
  '49',
  '7',
  '875',
  '876',
  '877',
  '878',
  '871',
  '91',
  '92',
  '93',
  '94',
  '95',
  '96',
  '97',
  '98',
  '91',
  ];

function algoadd5(n)
{
  var old_n = n;
  n = removeSpecChars(n);
  var startplace = 0;
  
  if(n.substr(0,4) == '+230')
  {
    startplace = 4;
  }
  
  if(n.substr(0,3) == '230')
  {
    startplace = 3;
  }
  
  for (var i = extensions.length - 1; i >= 0; i--)
  {
    if( n.substr(startplace, extensions[i].length) == extensions[i] )
    {
      return add230(startplace) + '5' + n.substr(startplace++);
    }
  }

  return old_n;
}

function algoremove5(n)
{
  var old_n = n;
  n = removeSpecChars(n);
  var startplace = 0;
  
  if(n.substr(0,4) == '+230')
  {
    startplace = 4;
  }
  
  if(n.substr(0,3) == '230')
  {
    startplace = 3;
  }
  
  for (var i = extensions.length - 1; i >= 0; i--)
  {
    console.warn(n.substr(startplace, 1));
    if( n.substr(startplace, 1) == '5')
    {
      return add230(startplace) + n.substr(startplace + 1);
    }
  }

  return old_n;
}

function add230(s)
{
  switch (s)
  {
  case 0:
    return '';
  case 3:
    return '230';
  case 4:
    return '+230';
  } 
}

function removeSpecChars(str)
{
  str = str.replace(/\s/g, '');
  str = str.replace(/\-/g, '');
  return str;
}




















