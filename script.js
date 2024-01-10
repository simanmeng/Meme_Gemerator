//to generate the meme
const inputForm = document.getElementById('memeInput');
const displayArea = document.getElementById('displayArea');

inputForm.addEventListener('submit',function(event)
{
    event.preventDefault();

    let imgUrl = document.getElementById('url').value;
    if(imgUrl === '')
    {
        alert('Please enter your image URL.')
    }
    else
    {
        let topTextContent = document.getElementById('topTextInput').value;
        let bottomTextContent = document.getElementById('bottomTextInput').value;
        let newMeme = document.createElement('div');
        let memeImg = document.createElement('img');
        let topText = document.createElement('div')
        let bottomText = document.createElement('div');
        let removeButton = document.createElement('button');
        removeButton.innerText = 'X'
    
        memeImg.src = imgUrl;
        memeImg.alt = 'Failed to Load';
        topText.innerText = topTextContent;
        bottomText.innerText = bottomTextContent;
        newMeme.classList.add('memes')
        topText.classList.add('topText');
        bottomText.classList.add('bottomText');
        removeButton.classList.add('removeButton');

        newMeme.appendChild(memeImg);
        newMeme.appendChild(topText);
        newMeme.appendChild(bottomText);
        newMeme.appendChild(removeButton);
        displayArea.appendChild(newMeme);

        //remove button effect
        newMeme.addEventListener('mouseover',function(e)
        {
            removeButton.style.display = 'block';
        })
        newMeme.addEventListener('mouseout',function(e)
        {
            removeButton.style.display = 'none';
        })

        memeInput.reset();
    }
    
})

//to remove the meme
displayArea.addEventListener('click',function(event)
{
    let clickTarget = event.target;
    if(clickTarget.className === 'removeButton')
    {
        console.log('button clicked');
        clickTarget.parentElement.remove();
    }
})