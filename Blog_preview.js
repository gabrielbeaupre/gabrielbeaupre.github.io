function Blog_preview(){
    // var button = $('btn_like');
    // button.click(function() {
    //     button.css('background-color', 'black')
    //     $(this).css('background-color', 'red')
    // });
    return(
        <div className="boxes">
            <div className="first_box">
                <h3 className="title_first">carrey price a seattle?</h3>

                <p className="description_first">Durant le repechage d'expension du seatle de kraken, Marc Bergevin prend un risque a ne pas proteger Carrey Price!</p>
                <div className="interagir">
                    <button className="btn_like">Like</button>
                    <a className="btn_commentaire" href="../public/commentaire.html">Commentaire</a> 
                </div>
                           
            </div>  
            <div className="second_box">
                <h3 className="title_second">Danault de retour l'anner prochaine?</h3>
                <p className="description_second"> Il est difficle de savoir si le centre defensife du canadien vas etre de retour l'anner prochaine du au montant d'argent desirer</p>
                <div className="interagir">
                    <button className="btn_like">Like</button>
                    <a className="btn_commentaire" href="../public/commentaire.html">Commentaire</a> 
                </div>
                           
            </div> 
            <div className="third_box">
                <h3 className="title_third">Qu'elle joueur vas choisir au premier rang cette anner?</h3>
                <p className="description_third">Beaucoup de recruteur pense que ce serait powers au top du classement</p>
                <div className="interagir">
                    <button className="btn_like">Like</button>
                    <a className="btn_commentaire" href="../public/commentaire.html">Commentaire</a> 
                </div>
                           
            </div>  
        </div>
    );
}
export default Blog_preview;