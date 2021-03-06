$( async () => {
  // carousel function
  let currentImgIndex = 0
  const numOfImages = $('.carousel-images').children().length - 1;

  $('.next').on('click', () => {

    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex < numOfImages) {
      currentImgIndex ++;
    } else {
      currentImgIndex = 0;
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

  $('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex > 0) {
      currentImgIndex --;
    } else {
      currentImgIndex = numOfImages
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })
// $('.container').css('background-image', (url'(https://i.pinimg.com/originals/cb/84/95/cb8495bfd8a20954e42a16c4c77c7927.jpg'))

// making information divs
  const bio = $('<div>')
  const bioTwo = $('<div>')
  const bioThree = $('<div>')
  const bioFour = $('<div>')

  $('.info').on('click', event => {
    event.preventDefault()

    let name = $(event.target).attr('id')
  console.log(name);


    // console.log(newData);
    const specificCharactor = newData.filter(object => object.name == name)
    console.log(specificCharactor);
    // console.log(newData);

    bio.empty()
    bio.text(`Name: ${specificCharactor[0].name}`).css('font-color', 'white')
    bioTwo.text(`Species: ${specificCharactor[0].species}`)
    bioThree.text(`gender: ${specificCharactor[0].gender}`)
    bioFour.text(`status: ${specificCharactor[0].status}`)


    $('.bottomContainer').append(bio)
    $('.bottomContainer').append(bioTwo)
    $('.bottomContainer').append(bioThree)
    $('.bottomContainer').append(bioFour)
})



const link = 'https://rickandmortyapi.com/api/character/'
const newData = await $.ajax({
  url: link,
  type: 'GET'
}).then(data => {
  return data.results;
})
.catch(err=>{
  console.log(err);
})


})
