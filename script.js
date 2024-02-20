const inputBox = document.getElementsByClassName("input-box");

function findSong()
{
    if(inputBox[0].value !== '')
    {
        inputBox[0].value = "";
    }
}