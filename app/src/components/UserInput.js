function UserInput() {
  return (
    <form className="userInput-form">
      <fieldset className="userInput-form__block">
        <legend>Contact Information</legend>
        <div className="form__block-element">
          <h3>
            Name <em>*</em>
          </h3>
          <input type="text" name="name" defaultValue="Tetiana" />
        </div>

        <div className="form__block-element">
          <h3>
            Email <em>*</em>
          </h3>
          <input type="email" name="email" defaultValue="tanya@nnn.kk" />
        </div>

        <div className="form__block-element">
          <h3>
            Phone <em>*</em>
          </h3>
          <input type="tel" name="phone" defaultValue="222-0-222" />
        </div>

        <div className="form__block-element">
          <h3>
            Address<em>*</em>
          </h3>
          <input
            type="text"
            name="address"
            defaultValue="Kyiv, Dovzhenko str., 123"
          />
        </div>
      </fieldset>
      <div className="userInput-form__button">
        <button type="submit">Add new User</button>
      </div>
    </form>
  );
}

export default UserInput;
