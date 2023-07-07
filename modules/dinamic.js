

const $tableCont = document.getElementById('dinamicTable')
const dataChallenge = data.info



console.log(dataChallenge)




function dynamicContent(array, place){
    const template = array.reduce((acc, act) => {

        return (
           acc +  `
          <tr class="tr-gen">
            <td class="td-gen">${act.title}</td>
            <td class="td-gen" ><a target="_blank" href="${act.link}">See component</a></td>
          </tr>  
            `);}, "")
            place.innerHTML = template
}

dynamicContent(dataChallenge, $tableCont)