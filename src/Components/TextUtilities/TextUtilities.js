import React from 'react'

function TextUtilities() {
    return (
        <div>
            <div style={{margin:"5px 0px"}} className="heading-h1 sans">
                <h1 >Hello Everyone how You doing</h1> 
            </div>
            <div style={{margin:"5px 0px"}} className="heading-h1 roboto">
                <h2>Hello Everyone how You doing</h2> 
            </div>
            <div style={{margin:"8px 0px"}} className="heading-h1 roboto">
                <h3>Hello Everyone how You doing</h3> 
            </div>
            <div style={{margin:"8px 0px"}} className="heading-h2 sans">
                <h4>Hello Everyone how You doing</h4> 
            </div>

            <h2 style={{textDecoration:"underline",margin:"12px 0px"}}>Paragraph Text : -</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi obcaecati qui maiores eveniet commodi eaque eius consequuntur culpa non!</p>
            <h2 style={{textDecoration:"underline",margin:"12px 0px"}}>Paragraph Grey text: -</h2>
            <p className="shaded-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi obcaecati qui maiores eveniet commodi eaque eius consequuntur culpa non!</p>
            <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%2520%253Ch3%253EHeadings%2520%253A%2520-%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522heading-h1%2520sans%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520%253EHello%2520Everyone%2520how%2520You%2520doing%253C%252Fh1%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522heading-h1%2520roboto%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EHello%2520Everyone%2520how%2520You%2520doing%253C%252Fh1%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522heading-h1%2520roboto%2520shaded-black%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EHello%2520Everyone%2520how%2520You%2520doing%253C%252Fh1%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522heading-h2%2520sans%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EHello%2520Everyone%2520how%2520You%2520doing%253C%252Fh1%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522heading-h2%2520roboto%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EHello%2520Everyone%2520how%2520You%2520doing%253C%252Fh1%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522heading-h2%2520monteserat%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EHello%2520Everyone%2520how%2520You%2520doing%253C%252Fh1%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522p%2520roboto%2522%253ELorem%2520ipsum%2520dolor%252C%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Ut%2520sit%2520adipisci%2520eveniet%2520atque%2520ducimus%2520impedit%2520doloremque%2520est%2520rerum%2520asperiores%2520pariatur.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522p%2520sans%2522%253ELorem%2520ipsum%2520dolor%252C%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Ut%2520sit%2520adipisci%2520eveniet%2520atque%2520ducimus%2520impedit%2520doloremque%2520est%2520rerum%2520asperiores%2520pariatur.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522p%2520monteserat%2522%253ELorem%2520ipsum%2520dolor%252C%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Ut%2520sit%2520adipisci%2520eveniet%2520atque%2520ducimus%2520impedit%2520doloremque%2520est%2520rerum%2520asperiores%2520pariatur.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522p%2520sans%2520shaded-black%2522%253ELorem%2520ipsum%2520dolor%252C%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Ut%2520sit%2520adipisci%2520eveniet%2520atque%2520ducimus%2520impedit%2520doloremque%2520est%2520rerum%2520asperiores%2520pariatu%253C%252Fp%253E"
  style={{width:"1020px",height:"800px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>
    )
}

export default TextUtilities
