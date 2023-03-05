
function ativarLink(link){
   const href = link.href;
   const url = window.location.href;
     
   if(url.includes(href)){
      console.log(link);
      link.classList.add('ativo')
   }

}
const links = document.querySelectorAll('.header-menu a').forEach(ativarLink);
