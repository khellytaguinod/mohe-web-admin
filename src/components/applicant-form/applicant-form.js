import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

import { Redirect } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css";

class ApplicantForm extends Component {
  state = {
    email: "",
    password: ""
  };

  state = {
    startDate: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state);
  };

  onChange = date => {
    this.setState({
      startDate: date
    });
  };

  setGender = event => {
    console.log(event.target.value);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5
            className="grey-text text-darken-3"
            style={{ textAlign: "center" }}
          >
            Registration Form
          </h5>
          <fieldset>
            <legend>Personal Information</legend>
            <div class="row">
              <h6>English / الإنجليزيه </h6>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="english-first-name">First Name</label>
                  <input
                    type="text"
                    id="english-first-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="english-second-name">Second Name</label>
                  <input
                    type="text"
                    id="english-second-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="english-third-name">Third Name</label>
                  <input
                    type="text"
                    id="english-third-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="english-last-name">Last Name</label>
                  <input
                    type="text"
                    id="english-last-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <h6>Arabic / العربية </h6>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="arabic-first-name">First Name</label>
                  <input
                    type="text"
                    id="arabic-first-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="arabic-second-name">Second Name</label>
                  <input
                    type="text"
                    id="arabic-second-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="arabic-third-name">Third Name</label>
                  <input
                    type="text"
                    id="arabic-third-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="arabic-last-name">Last Name</label>
                  <input
                    type="text"
                    id="arabic-last-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col s1"
                style={{
                  height: "75px",
                  padding: "26px 0px 0px 0px"
                }}
              >
                Birth Date
              </div>
              <div
                class="col s3"
                style={{
                  margin: "12px 0px 0px 0px"
                }}
              >
                <DatePicker
                  placeholderText="Select your Birth Date"
                  showPopperArrow={false}
                  selected={this.state.startDate}
                  onChange={this.onChange}
                  maxDate={new Date()}
                />
              </div>
              <div
                class="col s1"
                style={{
                  height: "75px",
                  textAlign: "center",
                  padding: "26px 0px 0px 0px"
                }}
              >
                Nationality
              </div>
              <div class="col s3">
                <div className="input-field">
                  <select
                    class="browser-default"
                    id="nationality"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Choose your nationality
                    </option>
                    <option value="afghan">Afghan</option>
                    <option value="albanian">Albanian</option>
                    <option value="algerian">Algerian</option>
                    <option value="american">American</option>
                    <option value="andorran">Andorran</option>
                    <option value="angolan">Angolan</option>
                    <option value="antiguans">Antiguans</option>
                    <option value="argentinean">Argentinean</option>
                    <option value="armenian">Armenian</option>
                    <option value="australian">Australian</option>
                    <option value="austrian">Austrian</option>
                    <option value="azerbaijani">Azerbaijani</option>
                    <option value="bahamian">Bahamian</option>
                    <option value="bahraini">Bahraini</option>
                    <option value="bangladeshi">Bangladeshi</option>
                    <option value="barbadian">Barbadian</option>
                    <option value="barbudans">Barbudans</option>
                    <option value="batswana">Batswana</option>
                    <option value="belarusian">Belarusian</option>
                    <option value="belgian">Belgian</option>
                    <option value="belizean">Belizean</option>
                    <option value="beninese">Beninese</option>
                    <option value="bhutanese">Bhutanese</option>
                    <option value="bolivian">Bolivian</option>
                    <option value="bosnian">Bosnian</option>
                    <option value="brazilian">Brazilian</option>
                    <option value="british">British</option>
                    <option value="bruneian">Bruneian</option>
                    <option value="bulgarian">Bulgarian</option>
                    <option value="burkinabe">Burkinabe</option>
                    <option value="burmese">Burmese</option>
                    <option value="burundian">Burundian</option>
                    <option value="cambodian">Cambodian</option>
                    <option value="cameroonian">Cameroonian</option>
                    <option value="canadian">Canadian</option>
                    <option value="cape verdean">Cape Verdean</option>
                    <option value="central african">Central African</option>
                    <option value="chadian">Chadian</option>
                    <option value="chilean">Chilean</option>
                    <option value="chinese">Chinese</option>
                    <option value="colombian">Colombian</option>
                    <option value="comoran">Comoran</option>
                    <option value="congolese">Congolese</option>
                    <option value="costa rican">Costa Rican</option>
                    <option value="croatian">Croatian</option>
                    <option value="cuban">Cuban</option>
                    <option value="cypriot">Cypriot</option>
                    <option value="czech">Czech</option>
                    <option value="danish">Danish</option>
                    <option value="djibouti">Djibouti</option>
                    <option value="dominican">Dominican</option>
                    <option value="dutch">Dutch</option>
                    <option value="east timorese">East Timorese</option>
                    <option value="ecuadorean">Ecuadorean</option>
                    <option value="egyptian">Egyptian</option>
                    <option value="emirian">Emirian</option>
                    <option value="equatorial guinean">
                      Equatorial Guinean
                    </option>
                    <option value="eritrean">Eritrean</option>
                    <option value="estonian">Estonian</option>
                    <option value="ethiopian">Ethiopian</option>
                    <option value="fijian">Fijian</option>
                    <option value="filipino">Filipino</option>
                    <option value="finnish">Finnish</option>
                    <option value="french">French</option>
                    <option value="gabonese">Gabonese</option>
                    <option value="gambian">Gambian</option>
                    <option value="georgian">Georgian</option>
                    <option value="german">German</option>
                    <option value="ghanaian">Ghanaian</option>
                    <option value="greek">Greek</option>
                    <option value="grenadian">Grenadian</option>
                    <option value="guatemalan">Guatemalan</option>
                    <option value="guinea-bissauan">Guinea-Bissauan</option>
                    <option value="guinean">Guinean</option>
                    <option value="guyanese">Guyanese</option>
                    <option value="haitian">Haitian</option>
                    <option value="herzegovinian">Herzegovinian</option>
                    <option value="honduran">Honduran</option>
                    <option value="hungarian">Hungarian</option>
                    <option value="icelander">Icelander</option>
                    <option value="indian">Indian</option>
                    <option value="indonesian">Indonesian</option>
                    <option value="iranian">Iranian</option>
                    <option value="iraqi">Iraqi</option>
                    <option value="irish">Irish</option>
                    <option value="israeli">Israeli</option>
                    <option value="italian">Italian</option>
                    <option value="ivorian">Ivorian</option>
                    <option value="jamaican">Jamaican</option>
                    <option value="japanese">Japanese</option>
                    <option value="jordanian">Jordanian</option>
                    <option value="kazakhstani">Kazakhstani</option>
                    <option value="kenyan">Kenyan</option>
                    <option value="kittian and nevisian">
                      Kittian and Nevisian
                    </option>
                    <option value="kuwaiti">Kuwaiti</option>
                    <option value="kyrgyz">Kyrgyz</option>
                    <option value="laotian">Laotian</option>
                    <option value="latvian">Latvian</option>
                    <option value="lebanese">Lebanese</option>
                    <option value="liberian">Liberian</option>
                    <option value="libyan">Libyan</option>
                    <option value="liechtensteiner">Liechtensteiner</option>
                    <option value="lithuanian">Lithuanian</option>
                    <option value="luxembourger">Luxembourger</option>
                    <option value="macedonian">Macedonian</option>
                    <option value="malagasy">Malagasy</option>
                    <option value="malawian">Malawian</option>
                    <option value="malaysian">Malaysian</option>
                    <option value="maldivan">Maldivan</option>
                    <option value="malian">Malian</option>
                    <option value="maltese">Maltese</option>
                    <option value="marshallese">Marshallese</option>
                    <option value="mauritanian">Mauritanian</option>
                    <option value="mauritian">Mauritian</option>
                    <option value="mexican">Mexican</option>
                    <option value="micronesian">Micronesian</option>
                    <option value="moldovan">Moldovan</option>
                    <option value="monacan">Monacan</option>
                    <option value="mongolian">Mongolian</option>
                    <option value="moroccan">Moroccan</option>
                    <option value="mosotho">Mosotho</option>
                    <option value="motswana">Motswana</option>
                    <option value="mozambican">Mozambican</option>
                    <option value="namibian">Namibian</option>
                    <option value="nauruan">Nauruan</option>
                    <option value="nepalese">Nepalese</option>
                    <option value="new zealander">New Zealander</option>
                    <option value="ni-vanuatu">Ni-Vanuatu</option>
                    <option value="nicaraguan">Nicaraguan</option>
                    <option value="nigerien">Nigerien</option>
                    <option value="north korean">North Korean</option>
                    <option value="northern irish">Northern Irish</option>
                    <option value="norwegian">Norwegian</option>
                    <option value="omani">Omani</option>
                    <option value="pakistani">Pakistani</option>
                    <option value="palauan">Palauan</option>
                    <option value="panamanian">Panamanian</option>
                    <option value="papua new guinean">Papua New Guinean</option>
                    <option value="paraguayan">Paraguayan</option>
                    <option value="peruvian">Peruvian</option>
                    <option value="polish">Polish</option>
                    <option value="portuguese">Portuguese</option>
                    <option value="qatari">Qatari</option>
                    <option value="romanian">Romanian</option>
                    <option value="russian">Russian</option>
                    <option value="rwandan">Rwandan</option>
                    <option value="saint lucian">Saint Lucian</option>
                    <option value="salvadoran">Salvadoran</option>
                    <option value="samoan">Samoan</option>
                    <option value="san marinese">San Marinese</option>
                    <option value="sao tomean">Sao Tomean</option>
                    <option value="saudi">Saudi</option>
                    <option value="scottish">Scottish</option>
                    <option value="senegalese">Senegalese</option>
                    <option value="serbian">Serbian</option>
                    <option value="seychellois">Seychellois</option>
                    <option value="sierra leonean">Sierra Leonean</option>
                    <option value="singaporean">Singaporean</option>
                    <option value="slovakian">Slovakian</option>
                    <option value="slovenian">Slovenian</option>
                    <option value="solomon islander">Solomon Islander</option>
                    <option value="somali">Somali</option>
                    <option value="south african">South African</option>
                    <option value="south korean">South Korean</option>
                    <option value="spanish">Spanish</option>
                    <option value="sri lankan">Sri Lankan</option>
                    <option value="sudanese">Sudanese</option>
                    <option value="surinamer">Surinamer</option>
                    <option value="swazi">Swazi</option>
                    <option value="swedish">Swedish</option>
                    <option value="swiss">Swiss</option>
                    <option value="syrian">Syrian</option>
                    <option value="taiwanese">Taiwanese</option>
                    <option value="tajik">Tajik</option>
                    <option value="tanzanian">Tanzanian</option>
                    <option value="thai">Thai</option>
                    <option value="togolese">Togolese</option>
                    <option value="tongan">Tongan</option>
                    <option value="trinidadian or tobagonian">
                      Trinidadian or Tobagonian
                    </option>
                    <option value="tunisian">Tunisian</option>
                    <option value="turkish">Turkish</option>
                    <option value="tuvaluan">Tuvaluan</option>
                    <option value="ugandan">Ugandan</option>
                    <option value="ukrainian">Ukrainian</option>
                    <option value="uruguayan">Uruguayan</option>
                    <option value="uzbekistani">Uzbekistani</option>
                    <option value="venezuelan">Venezuelan</option>
                    <option value="vietnamese">Vietnamese</option>
                    <option value="welsh">Welsh</option>
                    <option value="yemenite">Yemenite</option>
                    <option value="zambian">Zambian</option>
                    <option value="zimbabwean">Zimbabwean</option>
                  </select>
                </div>
              </div>
              <div
                class="col s1"
                style={{
                  height: "75px",
                  textAlign: "center",
                  padding: "26px 0px 0px 0px"
                }}
              >
                Birth Place
              </div>
              <div class="col s3">
                <div className="input-field">
                  <select
                    class="browser-default"
                    id="birth-place"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Choose your birth place
                    </option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, The Democratic Republic of The">
                      Congo, The Democratic Republic of The
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-bissau">Guinea-bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See (Vatican City State)">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">
                      Palestinian Territory, Occupied
                    </option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and The Grenadines">
                      Saint Vincent and The Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and The South Sandwich Islands">
                      South Georgia and The South Sandwich Islands
                    </option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">
                      Syrian Arab Republic
                    </option>
                    <option value="Taiwan, Province of China">
                      Taiwan, Province of China
                    </option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-leste">Timor-leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">
                      Virgin Islands, British
                    </option>
                    <option value="Virgin Islands, U.S.">
                      Virgin Islands, U.S.
                    </option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col s1"
                style={{
                  height: "75px",
                  padding: "26px 0px 0px 0px"
                }}
              >
                Gender
              </div>

              <div class="col s1.5">
                <p>
                  <label>
                    <input name="group1" type="radio" checked />
                    <span>Male</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>Female</span>
                  </label>
                </p>
              </div>

              <div
                class="col s1"
                style={{
                  height: "75px",
                  textAlign: "center",
                  padding: "26px 0px 0px 0px"
                }}
              >
                Religion
              </div>

              <div class="col s3">
                <div className="input-field">
                  <select
                    class="browser-default"
                    id="religion"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      What's your religion
                    </option>
                    <option value="muslim">Muslim</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              <div
                class="col s1.5"
                style={{
                  height: "75px",
                  textAlign: "center",
                  padding: "26px 0px 0px 0px"
                }}
              >
                Marital Status
              </div>

              <div class="col s3" style={{ float: "right" }}>
                <div className="input-field">
                  <select
                    class="browser-default"
                    id="marital-status"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Select marital status
                    </option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widow">Widow</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <h6>ID Information</h6>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="id-number">ID Number</label>
                  <input
                    type="number"
                    id="id-number"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div
                class="col s1.5"
                style={{
                  height: "75px",
                  textAlign: "center",
                  padding: "26px 0px 0px 0px"
                }}
              >
                ID Expiry Date
              </div>
              <div
                class="col s4"
                style={{
                  margin: "12px 0px 0px 0px"
                }}
              >
                <DatePicker
                  placeholderText="Select ID Expiry Date"
                  showPopperArrow={false}
                  selected={this.state.startDate}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div class="row">
              <h6>Passport Information</h6>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="passport-number">Passport Number</label>
                  <input
                    type="text"
                    id="passport-number"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div
                class="col s1.5"
                style={{
                  height: "75px",
                  textAlign: "center",
                  padding: "26px 0px 0px 0px"
                }}
              >
                Passport Issue Date
              </div>
              <div
                class="col s2"
                style={{
                  margin: "12px 0px 0px 0px"
                }}
              >
                <DatePicker
                  showPopperArrow={false}
                  selected={this.state.startDate}
                  onChange={this.onChange}
                />
              </div>
              <div
                class="col s1.5"
                style={{
                  height: "75px",
                  textAlign: "center",
                  padding: "26px 0px 0px 0px"
                }}
              >
                Passport Expiry Date
              </div>
              <div
                class="col s2"
                style={{
                  margin: "12px 0px 0px 0px"
                }}
              >
                <DatePicker
                  showPopperArrow={false}
                  selected={this.state.startDate}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div class="row">
              <h6>Highschool Information</h6>
              <div
                class="col s1.5"
                style={{
                  height: "75px",
                  padding: "26px 0px 0px 0px"
                }}
              >
                HighSchool Certificate
              </div>

              <div class="col s2">
                <div className="input-field">
                  <select
                    class="browser-default"
                    id="gender"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Select
                    </option>

                    <option value="38">
                      General Education Certificate -Adult Education
                    </option>
                    <option value="37">
                      General Education Certificate -Full time
                    </option>
                    <option value="39">
                      General Education Certificate -Liberal study
                    </option>
                    <option value="41">
                      General Education Diploma -Adult Education
                    </option>
                    <option value="47">
                      General Education Diploma -Bilingual schools
                    </option>
                    <option value="40">
                      General Education Diploma -Full time
                    </option>
                    <option value="42">
                      General Education Diploma -Islamic institute
                    </option>
                    <option value="43">
                      General Education Diploma -Liberal study
                    </option>
                    <option value="45">
                      General Education Diploma For Special Education -Adult
                      Education
                    </option>
                    <option value="44">
                      General Education Diploma For Special Education -Full time
                    </option>
                    <option value="53">International Certificate-APID</option>
                    <option value="50">
                      International Certificate-GCE(A-Level
                    </option>
                    <option value="49">
                      International Certificate-GCE(AS-Level
                    </option>
                    <option value="52">International Certificate-IB</option>
                    <option value="51">International Certificate-IBD</option>
                    <option value="48">International Certificate-IGCSE</option>
                    <option value="46">
                      Technical General Education Diploma -Royal Guard College
                    </option>
                  </select>
                </div>
              </div>

              <div class="col s2">
                <div className="input-field">
                  <label htmlFor="graduation-year">Graduation Year</label>
                  <input
                    type="text"
                    id="graduation-year"
                    maxlength="4"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="highschool-average">HighSchool Average</label>
                  <input
                    type="text"
                    id="highschool-average"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s2">
                <div className="input-field">
                  <label htmlFor="highschool-gpa">HighSchool GPA</label>
                  <input
                    type="text"
                    id="highschool-gpa"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>General Information</legend>
            <div class="row">
              <div class="col s3">
                <div onChange={this.setGender.bind(this)}>
                  <label className="radio-label">Are you employed?</label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="employed?"
                            value="yes"
                            type="radio"
                            defaultChecked
                          />
                          <span>Yes</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input name="employed?" value="no" type="radio" />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col s3">
                <div onChange={this.setGender.bind(this)}>
                  <label className="radio-label">English Language Exam?</label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="englishExam?"
                            value="yes"
                            type="radio"
                            defaultChecked
                          />
                          <span>Yes</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input name="englishExam?" value="no" type="radio" />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col s3">
                <div onChange={this.setGender.bind(this)}>
                  <label className="radio-label">Have Medical Problems?</label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="englishExam?"
                            value="yes"
                            type="radio"
                            defaultChecked
                          />
                          <span>Yes</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input name="englishExam?" value="no" type="radio" />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col s3">
                <div onChange={this.setGender.bind(this)}>
                  <label className="radio-label">Do you have Disability?</label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="englishExam?"
                            value="yes"
                            type="radio"
                            defaultChecked
                          />
                          <span>Yes</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input name="englishExam?" value="no" type="radio" />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="number-of-awards">Number of Awards</label>
                  <input
                    type="text"
                    id="number-of-awards"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="number-of-hrd-courses">
                    Number of HRD Courses
                  </label>
                  <input
                    type="text"
                    id="number-of-hrd-courses"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="number-of-inventions">
                    Number of Inventions
                  </label>
                  <input
                    type="text"
                    id="number-of-inventions"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="bank-account-number">
                    Bank Account Number
                  </label>
                  <input
                    type="text"
                    id="bank-account-number"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="bank-name">Bank Name</label>
                  <input
                    type="text"
                    id="bank-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <labe>Choose Country for Bank</labe>
                  <select
                    class="browser-default"
                    id="bank-country"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Select
                    </option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, The Democratic Republic of The">
                      Congo, The Democratic Republic of The
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-bissau">Guinea-bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See (Vatican City State)">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">
                      Palestinian Territory, Occupied
                    </option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and The Grenadines">
                      Saint Vincent and The Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and The South Sandwich Islands">
                      South Georgia and The South Sandwich Islands
                    </option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">
                      Syrian Arab Republic
                    </option>
                    <option value="Taiwan, Province of China">
                      Taiwan, Province of China
                    </option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-leste">Timor-leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">
                      Virgin Islands, British
                    </option>
                    <option value="Virgin Islands, U.S.">
                      Virgin Islands, U.S.
                    </option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div class="col s3">
                <div onChange={this.setGender.bind(this)}>
                  <label className="radio-label">
                    Is it your bank account?
                  </label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="own-bank-account"
                            value="yes"
                            type="radio"
                            defaultChecked
                          />
                          <span>Yes</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="own-bank-account"
                            value="no"
                            type="radio"
                          />
                          <span>No</span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              Academic details of the qualification you want to study
            </legend>
            <div class="row">
              <div class="col s3">
                <label className="radio-label">Study Location?</label>
                <div class="row radio-btn-container">
                  <div class="col s12">
                    <p>
                      <label>
                        <input
                          name="study-location"
                          value="yes"
                          type="radio"
                          defaultChecked
                        />
                        <span>Inside Oman</span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col s3">
                <label className="radio-label">Study Country?</label>
                <div class="row radio-btn-container">
                  <div class="col s12">
                    <p>
                      <label>
                        <input
                          name="study-country?"
                          value="yes"
                          type="radio"
                          defaultChecked
                        />
                        <span>Sultanate of Oman</span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col s5">
                <label className="radio-label">Study Level?</label>
                <div class="row radio-btn-container">
                  <div class="col s6">
                    <p>
                      <label>
                        <input
                          name="study-level"
                          value="under-graduate"
                          type="radio"
                          defaultChecked
                        />
                        <span>Under Graduate</span>
                      </label>
                    </p>
                  </div>
                  <div class="col s6">
                    <p>
                      <label>
                        <input
                          name="study-level"
                          value="post-graduate"
                          type="radio"
                          defaultChecked
                        />
                        <span>Post Graduate</span>
                      </label>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s3">
                <div className="input-field">
                  <labe>Study Mode</labe>
                  <select
                    class="browser-default"
                    id="bank-country"
                    onChange={this.handleChange}
                  >
                    <option selected="selected" value="" disabled>
                      Select Study Mode
                    </option>
                    <option value="N">Full Time</option>
                    <option value="M">Member</option>
                    <option value="D">Distance Learning</option>
                    <option value="P">PARTIAL STUDY</option>
                    <option value="A">Morning</option>
                    <option value="B">Night</option>
                    <option value="R">Research</option>
                    <option value="C">Open Learning</option>
                  </select>
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <labe>Choose University</labe>
                  <select
                    class="browser-default"
                    id="bank-country"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Select University
                    </option>

                    <option value="6242">ABRI COLLEGE OF TECHNOLOGY</option>
                    <option value="8166">AIR FORCE TECHNICAL COLLEGE</option>
                    <option value="8147">AL DHAHIRA NURSING INSTITUTE</option>
                    <option value="1601">AL-BAYAN COLLEGE</option>
                    <option value="443">AL-BURAIMI COLLEGE</option>
                    <option value="2423">AL-BURAIMI UNIVERSITY</option>
                    <option value="8154">
                      AL-KHABORAH VOCATIONAL COLLEGE FOR MARINE SCIENCES
                    </option>
                    <option value="2421">AL-SHARQIYAH UNIVERSITY</option>
                    <option value="439">AL-ZAHRA COLLEGE </option>
                    <option value="8150">
                      ALBURAIMI VOCATIONAL TRAINING CENTER
                    </option>
                    <option value="8168">ALDAKHILIA NURSING INSTITUTE</option>
                    <option value="1735">ARAB OPEN UNIVERSITY</option>
                    <option value="428">
                      CALEDONIAN COLLEGE OF ENGINEERING
                    </option>
                    <option value="2532">
                      COLLEGE OF APPLIED SCIENCES IN IBRI
                    </option>
                    <option value="441">
                      COLLEGE OF APPLIED SCIENCES IN NIZWA
                    </option>
                    <option value="1652">
                      COLLEGE OF APPLIED SCIENCES IN RUSTAQ
                    </option>
                    <option value="1670">
                      COLLEGE OF APPLIED SCIENCES IN SALALAH
                    </option>
                    <option value="1654">
                      COLLEGE OF APPLIED SCIENCES IN SOHAR
                    </option>
                    <option value="1653">
                      COLLEGE OF APPLIED SCIENCES IN SUR
                    </option>
                    <option value="435">
                      COLLEGE OF BANKING &amp; FINANCIAL STUDIES
                    </option>
                    <option value="1596">COLLEGE OF SHARIA SCIENCES</option>
                    <option value="8165">COMMAND AND STAFF COLLEGE</option>
                    <option value="422">DHOFAR UNIVERSITY</option>
                    <option value="1722">
                      GERMAN UNIVERSITY OF TECHNOLOGY IN OMAN
                    </option>
                    <option value="3622">
                      GLOBAL COLLEGE OF ENGINEERING AND TECHNOLOGY
                    </option>
                    <option value="421">GULF COLLEGE</option>
                    <option value="16502">HIGHER JUDICIAL INSTITUTE</option>
                    <option value="1635">HIGHER TECHNICAL COLLEGE</option>
                    <option value="6243">IBRA COLLEGE OF TECHNOLOGY</option>
                    <option value="8144">IBRA NURSING INSTITUTE</option>
                    <option value="8152">IBRI VOCATIONAL COLLEGE</option>
                    <option value="8156">
                      INSTITUTE OF TOPOGRAPHICAL SCIENCES
                    </option>
                    <option value="438">
                      INTERNATIONAL COLLEGE OF ENGINEERING &amp; MANAGEMENT
                    </option>
                    <option value="1515">
                      INTERNATIONAL MARITIME COLLEGE OMAN
                    </option>
                    <option value="445">MAJAN COLLEGE</option>
                    <option value="427">MAZOON COLLEGE</option>
                    <option value="444">MIDDLE EAST COLLEGE </option>
                    <option value="8202">MILITARY TECHNICAL COLLEGE</option>
                    <option value="429">
                      MODERN COLLEGE OF BUSINESS &amp; SCIENCE
                    </option>
                    <option value="440">MUSCAT COLLEGE</option>
                    <option value="19768">MUSCAT NURSING INSTITUTE</option>
                    <option value="7343">MUSCAT UNIVERSITY </option>
                    <option value="6245">MUSSANAH COLLEGE OF TECHNOLOGY</option>
                    <option value="9222">NATIONAL SURVEY AUTHORITY</option>
                    <option value="6143">NIZWA COLLEGE OF TECHNOLOGY</option>
                    <option value="423">NIZWA UNIVERSITY</option>
                    <option value="8170">
                      NORTH BATINAH NURSING INSTITUTE
                    </option>
                    <option value="3520">NURSING INSTITUTE</option>
                    <option value="22669">
                      National College of Automative Technology
                    </option>
                    <option value="18147">
                      OMAN COLLEGE OF HEALTH SCIENCES{" "}
                    </option>
                    <option value="420">
                      OMAN COLLEGE OF MANAGEMENT &amp; TECHNOLOGY
                    </option>
                    <option value="1602">OMAN DENTAL COLLEGE</option>
                    <option value="8148">
                      OMAN HEALTH INFORMATION MANAGEMENT INSTITUTE
                    </option>
                    <option value="437">OMAN MEDICAL COLLEGE</option>
                    <option value="8171">OMAN PHARMACY INSTITUTE</option>
                    <option value="8149">
                      OMAN SPECIALIZED NURSING INSTITUTE
                    </option>
                    <option value="1517">OMAN TOURISM COLLEGE</option>
                    <option value="8146">RUSTAQ NURSING INSTITUTE</option>
                    <option value="8172">SAHAM VOCATIONAL COLLEGE</option>
                    <option value="6144">SALALAH COLLEGE OF TECHNOLOGY</option>
                    <option value="8167">SALALAH NURSING INSTITUTE</option>
                    <option value="8155">SALALAH VOCATIONAL COLLEGE</option>
                    <option value="419">SCIENTIFIC COLLEGE OF DESIGN</option>
                    <option value="8153">SEEB VOCATIONAL COLLEGE</option>
                    <option value="6244">SHINAS COLLEGE OF TECHNOLOGY</option>
                    <option value="8173">SHINAS VOCATIONAL COLLEGE</option>
                    <option value="8145">SOHAR NURSING INSTITUTE</option>
                    <option value="430">SOHAR UNIVERSITY</option>
                    <option value="8143">
                      SULTAN QABOOS ACADEMY FOR POLICE SCIENCES
                    </option>
                    <option value="8164">SULTAN QABOOS AIR ACADEMY</option>
                    <option value="9223">SULTAN QABOOS AIR COMMAND</option>
                    <option value="447">SULTAN QABOOS UNIVERSITY</option>
                    <option value="8169">SUR NURSING INSTITUTE</option>
                    <option value="436">SUR UNIVERSITY COLLEGE</option>
                    <option value="8151">SUR VOCATIONAL COLLEGE</option>
                    <option value="2424">TECHNICAL COLLEGE</option>
                    <option value="19547">TEST UNIVERSITY</option>
                    <option value="18256">
                      THE HIGHER INSTITUTE FOR HEALTH SPECIALIZATIONS
                    </option>
                    <option value="446">
                      WALJAT COLLEGE OF APPLIED SCIENCES
                    </option>
                    <option value="20988">الكلية الفنية الصناعية</option>
                    <option value="21869">الكلية الفنية الصناعية بابراء</option>
                    <option value="13984">
                      الكلية المتوسطة للمعلمات بالخوير
                    </option>
                    <option value="13985">
                      الكلية المتوسطة للمعلمات بالرستاق
                    </option>
                    <option value="13992">
                      الكلية المتوسطة للمعلمات بعبري
                    </option>
                    <option value="13986">
                      الكلية المتوسطة للمعلمات بمسفط
                    </option>
                    <option value="13983">
                      الكلية المتوسطة للمعلمات والمعلمين بصلالة
                    </option>
                    <option value="14542">
                      الكلية المتوسطة للمعلمين بالرستاق
                    </option>
                    <option value="13988">
                      الكلية المتوسطة للمعلمين بالقرم
                    </option>
                    <option value="13991">
                      الكلية المتوسطة للمعلمين بصحار
                    </option>
                    <option value="13987">الكلية المتوسطة للمعلمين بصور</option>
                    <option value="13989">
                      الكلية المتوسطة للمعلمين بمسفط
                    </option>
                    <option value="13990">
                      الكلية المتوسطة للمعلمين بنزوى
                    </option>
                    <option value="17871">كلية التربية بالرستاق</option>
                    <option value="17872">كلية التربية بصحار</option>
                    <option value="17874">كلية التربية بصلالة</option>
                    <option value="17876">كلية التربية بصور</option>
                    <option value="17873">كلية التربية بعبري</option>
                    <option value="17875">كلية التربية بنزوى</option>
                  </select>
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="collage-name">Collage</label>
                  <input
                    type="text"
                    id="collage-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="main-major">Main Major</label>
                  <input
                    type="text"
                    id="main-major"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="sub-major">Sub Major</label>
                  <input
                    type="text"
                    id="sub-major"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="certificate">Certificate</label>
                  <input
                    type="text"
                    id="certificate"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="study-period">Study Period</label>
                  <input
                    type="text"
                    id="study-period"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="exp-grad-date">Exp. Grad Date</label>
                  <input
                    type="text"
                    id="exp-grad-date"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="academic-year">Academic Year</label>
                  <input
                    type="text"
                    id="academic-year"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <label>Start Date</label>
                <DatePicker
                  showPopperArrow={false}
                  selected={this.state.startDate}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Contact Information</legend>
            <div class="row">
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="oman-mobile-numer">Oman Mobile Number</label>
                  <input
                    type="tel"
                    id="oman-mobile-numer"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" onChange={this.handleChange} />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s3">
                <div className="input-field">
                  <labe>Region</labe>
                  <select
                    class="browser-default"
                    id="bank-country"
                    onChange={this.handleChange}
                  >
                    <option selected="selected" value="" disabled>
                      Select Oman Region
                    </option>

                    <option value="0">Select</option>
                    <option value="10">AL Buraimi Governorate</option>
                    <option value="8">Al wsta Governorate</option>
                    <option value="5">Dahira Governorate</option>
                    <option value="3">Dakhlia Governorate</option>
                    <option value="6">Dhofar Governorate</option>
                    <option value="4">Governorate of North Sharqia</option>
                    <option value="2">Governorate of North Al Batinah </option>
                    <option value="9">Governorate of South AL Batinah</option>
                    <option value="11">Governorate of South Sharqia</option>
                    <option value="7">Mosndam Governorate</option>
                    <option value="1">Muscat Governorate</option>
                  </select>
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="wilayah">wilayah</label>
                  <input
                    type="text"
                    id="wilayah"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="postal-code">Postal Code</label>
                  <input
                    type="text"
                    id="postal-code"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="po-box">PO Box</label>
                  <input type="text" id="po-box" onChange={this.handleChange} />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="guardian-name"> Guardian Name</label>
                  <input
                    type="text"
                    id="guardian-name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="guardian-address"> Guardian Address</label>
                  <input
                    type="text"
                    id="guardian-address"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <labe> Guardian Relationship</labe>
                  <select
                    class="browser-default"
                    id="bank-country"
                    onChange={this.handleChange}
                  >
                    <option selected="selected" value="" disabled>
                      Choose Guardian Relationship
                    </option>

                    <option value="9">Father</option>
                    <option selected="selected" value="10">
                      Mother
                    </option>
                    <option value="11">Son</option>
                    <option value="6">Husband</option>
                    <option value="2">Brother</option>
                    <option value="3">Uncle</option>
                    <option value="4">Daughter</option>
                    <option value="5">Wife</option>
                    <option value="12">Grandfather</option>
                    <option value="13">Grandmother</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="guardian-mobile">
                    {" "}
                    Guardian Mobile Number In Oman
                  </label>
                  <input
                    type="text"
                    id="guardian-mobile"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="guardian-work"> Guardian Work Location</label>
                  <input
                    type="text"
                    id="guardian-work"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="guardian-work-number">
                    Guardian Work Number
                  </label>
                  <input
                    type="text"
                    id="guardian-work-number"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <div className="input-field right-align">
            <button className="btn pink lighten-1">Next Page</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantForm);
