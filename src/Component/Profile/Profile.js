import Navigation from "../Navigation/Navigation";

function Profile() {
    return (
        <div className="root">
            <Navigation/>
            <section className="account">
                <h2 className="account__name">Привет, Сергей!</h2>
                <div className="account__info">
                    <div className="account__info-name">
                        <p className="account__task">Имя</p>
                        <p className="account__result">Сергей</p>
                    </div>
                    <div className="account__info-name">
                        <p className="account__task">E-mail</p>
                        <p className="account__result">pochta@yandex.ru</p>
                    </div>
                </div>
            </section>
            <section className="edit">
                <button className="edit__button-edit button" type="button">Редактировать</button>
                <button className="edit__button-exit button" type="button">Выйти из аккаунта</button>
            </section>
        </div>
    );
  }
  
export default Profile;