function kortit()
{
  var pakkaus = [''];
  var maat = ['&#x2664;', '&#9827;', '&#9826;', '&#9825;'];

  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < numerot.length; n++)
    {
      if(m == maat.length-1 && n == numerot.length-1)
      {
        pakkaus[laskuri] = maat[m] + numerot[n];
      }
      else {
        pakkaus[laskuri] = maat[m]+numerot[n];
        laskuri++;
      }

    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakkaus[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('pakkaus').innerHTML = '<p>'+kortit+'</p>';
}
