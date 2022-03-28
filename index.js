window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.backgroundColor = 'white'
    
  
  }   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.boxShadow = '0 4px 8px 0 rgb(0, 0, 0, 0.431)'
  
  } else{
    document.getElementById("navbar").style.backgroundColor = 'rgba(169, 169, 169, 0.568)'
    document.getElementById("navbar").style.boxShadow = 'none'
  }
}
  