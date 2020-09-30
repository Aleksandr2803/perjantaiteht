function taulukoksi()
{
  var jono = [];
  jono = [[6, 3, 2, 89], [45, 41, 94, 2], [4, 22, 12, 75], [11, 45, 8, 1], [4, 11, 6, 27]];
  var taulu = '<table border="1">';
  for(var j = 0; j < jono.length; j++)
  {

      taulu += '<tr>';
      for(var k = 0; k < jono[j].length; k++)
      {
        taulu += '<td>' + jono[j][k] + '</td>';
    }
      taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('taulu1').innerHTML = taulu;
}
