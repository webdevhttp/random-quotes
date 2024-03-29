function generate(){
    var quotes={
        "― Jules Renard, The Journal of Jules Renard":'"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',

        "― Albert Einstein":'"Our task must be to free ourselves...by widening our circle of compassion to embrace all living creatures and the whole of nature and it."',

        "― Lana Del Rey":'"Who are you? Are you in touch with all of your darkest fantasies?Have you created a life for yourself where you can experience them?I have. I am fucking crazy.But I am free."'
    }
    var authors=Object.keys(quotes);

    var author = authors[Math.floor(Math.random()*authors.length)]
    var quote=quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;

}