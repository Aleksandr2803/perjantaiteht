function arvoLotto()
{
  var numerot = [];
  var temp;
  for(var lotto = 0; lotto < 7; lotto++)
  {
    temp = Math.floor(Math.random()*40)+1;
    numerot[lotto] = temp;
  }
  numerot.sort();

  document.getElementById('taulu').innerHTML = '<p>'+numerot+'</p>';
}
