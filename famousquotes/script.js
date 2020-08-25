const quotes=[
    {
    name:'Stephen King',
    quote:'The man behind the lens of one of the most sepulchral photograph of the century – a Sudanese child, starved almost to death, crouching with her head buried in her tiny hands while a vulture awaits her death so that it could devour the corpse. A jarring image of poverty, destitute and famine, the photograph, fetched Carter the Pulitzer prize in 1994 but he had seen too much by that time.'

},
{
    name:'Leonardo Da',
    quote:'Excuse the blood, but I have slit my wrists and neck. It was the intention that I would die in the woods so that it would take a few days before I was possibly found. I belong in the woods and have always done so. No one will understand the reason for this anyway…'

},

{
    name:'Kurt Cobain',
    quote:'I don’t have the passion anymore, and so remember, it’s better to burn out than to fade away.'

},

{
    name:'Leo Tolstoy',
    quote:'The man behind the lens of one of the most sepulchral photograph of the century – a Sudanese child, starved almost to death, crouching with her head buried in her tiny hands while a vulture awaits her death so that it could devour the corpse. A jarring image of poverty, destitute and famine, the photograph, fetched Carter the Pulitzer prize in 1994 but he had seen too much by that time.'

},

{
    name:'Jiah Khan',
    quote:'Dearest, I feel certain that I am going mad again. I feel we can’t go through another of those terrible times. And I shan’t recover this time…. Everything has gone from me but the certainty of your goodness. I can’t go on spoiling your life any longer”'

},

{
    name:'MAHMUDO KARGAS',
    quote:'The man behind the lens of one of the most sepulchral photograph of the century – a Sudanese child, starved almost to death, crouching with her head buried in her tiny hands while a vulture awaits her death so that it could devour the corpse. A jarring image of poverty, destitute and famine, the photograph, fetched Carter the Pulitzer prize in 1994 but he had seen too much by that time.'

},
{
    name:'Ali GÜMRÜKÇÜ',
    quote:'The man behind the lens of one of the most sepulchral photograph of the century – a Sudanese child, starved almost to death, crouching with her head buried in her tiny hands while a vulture awaits her death so that it could devour the corpse. A jarring image of poverty, destitute and famine, the photograph, fetched Carter the Pulitzer prize in 1994 but he had seen too much by that time.'

},

{
    name:'John Kennedy',
    quote:'The man behind the lens of one of the most sepulchral photograph of the century – a Sudanese child, starved almost to death, crouching with her head buried in her tiny hands while a vulture awaits her death so that it could devour the corpse. A jarring image of poverty, destitute and famine, the photograph, fetched Carter the Pulitzer prize in 1994 but he had seen too much by that time.'

},

{
    name:'Elizabeth King',
    quote:'The man behind the lens of one of the most sepulchral photograph of the century – a Sudanese child, starved almost to death, crouching with her head buried in her tiny hands while a vulture awaits her death so that it could devour the corpse. A jarring image of poverty, destitute and famine, the photograph, fetched Carter the Pulitzer prize in 1994 but he had seen too much by that time.'

},

]

const quoteBtn=document.getElementById('quoteBtn');
const quoteAuthor=document.getElementById('quoteAuthor');
const quote=document.getElementById('quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
    let number=Math.floor(Math.random()*quotes.length);
    quote.innerHTML=quotes[number].quote;
    quoteAuthor.innerHTML=quotes[number].name;
}













const simplequotes=[
    {
        name:'Author number 1',
        quote:'quote number 1'
    }
]
