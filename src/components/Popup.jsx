function Popup({message,acceptPrompt,denyPrompt})
{
return(
<div className='window popup'>

<div className='card'>
<p>{message}</p>
<button className='popup-btn confirm'onClick={acceptPrompt}>
confirm
</button>
<button className='popup-btn cancel'onClick={denyPrompt}>
cancel
</button>
</div>

</div>
)
}

export default Popup
