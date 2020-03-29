import React, { Component } from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css";

import { createApplicationForm } from "../../store/actions/applicationFormActions";

class ApplicantForm extends Component {
  state = {
    englishFirstName: "",
    englishSecondName: "",
    englishThirdName: "",
    englishLastName: "",

    arabicFirstName: "",
    arabicSecondName: "",
    arabicThirdName: "",
    arabicLastName: "",

    birthDate: null,
    nationality: "",
    birthPlace: "",
    gender: "",
    religion: "",
    martialStatus: "",

    idNumber: "",
    idExpiryDate: null,
    passportNumber: "",
    passportIssueDate: null,
    passportExpiryDate: null,

    hsCertificate: "",
    hsGraduationYear: "",
    hsAverage: "",
    hsGPA: "",

    employed: "",
    takeEnglishExam: "",
    haveMedicalProblems: "",
    disability: "",

    noOfAward: "",
    noOfHRDCourses: "",
    noOfInventions: "",
    bankAccountNo: "",
    bankName: "",
    bankCountry: "",
    isBankPersonallyOwned: "",

    isStudyLocationInsideOman: "yes",
    studyCountry: "oman",
    studyLevel: "",
    studyMode: "",
    university: "",
    collage: "",
    mainMajor: "",
    subMajor: "",
    certificate: "",
    studyPeriod: "",
    expGradDate: "",
    academicYear: "",
    startDate: null,

    omanMobileNo: "",
    email: "",
    region: "",
    wilayah: "",
    postalCode: "",
    poBox: "",
    guardianName: "",
    guardianAddress: "",
    guardianRelationship: "",
    guardianMobileNo: "",
    guardianWorkLoc: "",
    guardianWorkNo: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("please work");
    this.props.createApplicationForm(this.state);
  };

  changBday = date => {
    this.setState({
      birthDate: date
    });
  };

  changeIdExpiryDate = date => {
    this.setState({
      idExpiryDate: date
    });
  };

  changepassportIssueDate = date => {
    this.setState({
      passportIssueDate: date
    });
  };

  changepassportExpiryDate = date => {
    this.setState({
      passportExpiryDate: date
    });
  };

  changestartDate = date => {
    this.setState({
      startDate: date
    });
  };

  setRadio = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // clickNextPage = () => {
  //   console.log("please work");
  //   this.props.createApplicationForm(this.state);
  // };

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/" />;

    console.log(this.state, "state here");

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
                  <label htmlFor="englishFirstName">First Name</label>
                  <input
                    type="text"
                    id="englishFirstName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="englishSecondName">Second Name</label>
                  <input
                    type="text"
                    id="englishSecondName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="englishThirdName">Third Name</label>
                  <input
                    type="text"
                    id="englishThirdName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="englishLastName">Last Name</label>
                  <input
                    type="text"
                    id="englishLastName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <h6>Arabic / العربية </h6>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="arabicFirstName">First Name</label>
                  <input
                    type="text"
                    id="arabicFirstName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="arabicSecondName">Second Name</label>
                  <input
                    type="text"
                    id="arabicSecondName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="arabicThirdName">Third Name</label>
                  <input
                    type="text"
                    id="arabicThirdName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="arabicLastName">Last Name</label>
                  <input
                    type="text"
                    id="arabicLastName"
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
                  selected={this.state.birthDate}
                  onChange={this.changBday}
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
                    id="birthPlace"
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
                class="col s3"
                style={{
                  height: "75px",
                  padding: "26px 0px 0px 0px"
                }}
              >
                <div onChange={this.setRadio.bind(this)}>
                  <label className="radio-label">Choose Gender</label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="gender"
                            id="gender"
                            value="male"
                            type="radio"
                          />
                          <span>Male</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="gender"
                            id="gender"
                            value="female"
                            type="radio"
                          />
                          <span>Female</span>
                        </label>
                      </p>
                    </div>
                  </div>
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
                    id="martialStatus"
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
                  <label htmlFor="idNumber">ID Number</label>
                  <input
                    type="number"
                    id="idNumber"
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
                  selected={this.state.idExpiryDate}
                  onChange={this.changeIdExpiryDate}
                />
              </div>
            </div>
            <div class="row">
              <h6>Passport Information</h6>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="passportNumber">Passport Number</label>
                  <input
                    type="text"
                    id="passportNumber"
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
                  selected={this.state.passportIssueDate}
                  onChange={this.changepassportIssueDate}
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
                  selected={this.state.passportExpiryDate}
                  onChange={this.changepassportExpiryDate}
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
                    id="hsCertificate"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Select
                    </option>

                    <option value="General Education Certificate -Adult Education">
                      General Education Certificate -Adult Education
                    </option>
                    <option value="General Education Certificate -Full time">
                      General Education Certificate -Full time
                    </option>
                    <option value="General Education Certificate -Liberal study">
                      General Education Certificate -Liberal study
                    </option>
                    <option value="General Education Diploma -Adult Education">
                      General Education Diploma -Adult Education
                    </option>
                    <option value="General Education Diploma -Bilingual schools">
                      General Education Diploma -Bilingual schools
                    </option>
                    <option value="General Education Diploma -Full time">
                      General Education Diploma -Full time
                    </option>
                    <option value="General Education Diploma -Islamic institute">
                      General Education Diploma -Islamic institute
                    </option>
                    <option value="General Education Diploma -Liberal study">
                      General Education Diploma -Liberal study
                    </option>
                    <option
                      value="General Education Diploma For Special Education - Adult
                      Education"
                    >
                      General Education Diploma For Special Education - Adult
                      Education
                    </option>
                    <option value="General Education Diploma For Special Education - Full time">
                      General Education Diploma For Special Education - Full
                      time
                    </option>
                    <option value="International Certificate-APID">
                      International Certificate-APID
                    </option>
                    <option value="International Certificate-GCE A-Level">
                      International Certificate-GCE A-Level
                    </option>
                    <option value="International Certificate-GCE AS-Level">
                      International Certificate-GCE AS-Level
                    </option>
                    <option value="International Certificate-IB">
                      International Certificate-IB
                    </option>
                    <option value="International Certificate-IBD">
                      International Certificate-IBD
                    </option>
                    <option value="International Certificate-IGCSE">
                      International Certificate-IGCSE
                    </option>
                    <option value="Technical General Education Diploma -Royal Guard College">
                      Technical General Education Diploma -Royal Guard College
                    </option>
                  </select>
                </div>
              </div>

              <div class="col s2">
                <div className="input-field">
                  <label htmlFor="hsGraduationYear">Graduation Year</label>
                  <input
                    type="text"
                    id="hsGraduationYear"
                    maxlength="4"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="hsAverage">HighSchool Average</label>
                  <input
                    type="text"
                    id="hsAverage"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s2">
                <div className="input-field">
                  <label htmlFor="hsGPA">HighSchool GPA</label>
                  <input type="text" id="hsGPA" onChange={this.handleChange} />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>General Information</legend>
            <div class="row">
              <div class="col s3">
                <div onChange={this.setRadio.bind(this)}>
                  <label className="radio-label">Are you employed?</label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="employed"
                            id="employed"
                            value="yes"
                            type="radio"
                          />
                          <span>Yes</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            id="employed"
                            name="employed"
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
              <div class="col s3">
                <div onChange={this.setRadio.bind(this)}>
                  <label className="radio-label">English Language Exam?</label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="takeEnglishExam"
                            id="takeEnglishExam"
                            value="yes"
                            type="radio"
                          />
                          <span>Yes</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="takeEnglishExam"
                            id="takeEnglishExam"
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
              <div class="col s3">
                <div onChange={this.setRadio.bind(this)}>
                  <label className="radio-label">Have Medical Problems?</label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="haveMedicalProblems"
                            id="haveMedicalProblems"
                            value="yes"
                            type="radio"
                          />
                          <span>Yes</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="haveMedicalProblems"
                            id="haveMedicalProblems"
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
              <div class="col s3">
                <div onChange={this.setRadio.bind(this)}>
                  <label className="radio-label">Do you have Disability?</label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="disability"
                            id="disability"
                            value="yes"
                            type="radio"
                          />
                          <span>Yes</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="disability"
                            id="disability"
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
            <div class="row">
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="noOfAward">Number of Awards</label>
                  <input
                    type="text"
                    id="noOfAward"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="noOfHRDCourses">Number of HRD Courses</label>
                  <input
                    type="text"
                    id="noOfHRDCourses"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="noOfInventions">Number of Inventions</label>
                  <input
                    type="text"
                    id="noOfInventions"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="bankAccountNo">Bank Account Number</label>
                  <input
                    type="text"
                    id="bankAccountNo"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="bankName">Bank Name</label>
                  <input
                    type="text"
                    id="bankName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <labe>Choose Country for Bank</labe>
                  <select
                    class="browser-default"
                    id="bankCountry"
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
                <div onChange={this.setRadio.bind(this)}>
                  <label className="radio-label">
                    Is it your bank account?
                  </label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="isBankPersonallyOwned"
                            id="isBankPersonallyOwned"
                            value="yes"
                            type="radio"
                          />
                          <span>Yes</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="isBankPersonallyOwned"
                            id="isBankPersonallyOwned"
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
                <div onChange={this.setRadio.bind(this)}>
                  <label className="radio-label">Study Level?</label>
                  <div class="row radio-btn-container">
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="studyLevel"
                            id="studyLevel"
                            value="Under Graduate"
                            type="radio"
                          />
                          <span>Under Graduate</span>
                        </label>
                      </p>
                    </div>
                    <div class="col s6">
                      <p>
                        <label>
                          <input
                            name="studyLevel"
                            id="studyLevel"
                            value="Post Graduate"
                            type="radio"
                          />
                          <span>Post Graduate</span>
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
                  <labe>Study Mode</labe>
                  <select
                    class="browser-default"
                    id="studyMode"
                    onChange={this.handleChange}
                  >
                    <option selected="selected" value="" disabled>
                      Select Study Mode
                    </option>
                    <option value="Full Time">Full Time</option>
                    <option value="Member">Member</option>
                    <option value="Distance Learning">Distance Learning</option>
                    <option value="PARTIAL STUDY">PARTIAL STUDY</option>
                    <option value="Morning">Morning</option>
                    <option value="Night">Night</option>
                    <option value="Research">Research</option>
                    <option value="Open Learning">Open Learning</option>
                  </select>
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <labe>Choose University</labe>
                  <select
                    class="browser-default"
                    id="university"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Select University
                    </option>

                    <option value="ABRI COLLEGE OF TECHNOLOGY">
                      ABRI COLLEGE OF TECHNOLOGY
                    </option>
                    <option value="AIR FORCE TECHNICAL COLLEGE">
                      AIR FORCE TECHNICAL COLLEGE
                    </option>
                    <option value="AL DHAHIRA NURSING INSTITUTE">
                      AL DHAHIRA NURSING INSTITUTE
                    </option>
                    <option value="AL-BAYAN COLLEGE">AL-BAYAN COLLEGE</option>
                    <option value="AL-BURAIMI COLLEGE">
                      AL-BURAIMI COLLEGE
                    </option>
                    <option value="AL-BURAIMI UNIVERSITY">
                      AL-BURAIMI UNIVERSITY
                    </option>
                    <option value="AL-KHABORAH VOCATIONAL COLLEGE FOR MARINE SCIENCES">
                      AL-KHABORAH VOCATIONAL COLLEGE FOR MARINE SCIENCES
                    </option>
                    <option value="AL-SHARQIYAH UNIVERSITY">
                      AL-SHARQIYAH UNIVERSITY
                    </option>
                    <option value="AL-ZAHRA COLLEGE">AL-ZAHRA COLLEGE</option>
                    <option value="ALBURAIMI VOCATIONAL TRAINING CENTER">
                      ALBURAIMI VOCATIONAL TRAINING CENTER
                    </option>
                    <option value="ALDAKHILIA NURSING INSTITUTE">
                      ALDAKHILIA NURSING INSTITUTE
                    </option>
                    <option value="ARAB OPEN UNIVERSITY">
                      ARAB OPEN UNIVERSITY
                    </option>
                    <option value="CALEDONIAN COLLEGE OF ENGINEERING">
                      CALEDONIAN COLLEGE OF ENGINEERING
                    </option>
                    <option value="COLLEGE OF APPLIED SCIENCES IN IBRI">
                      COLLEGE OF APPLIED SCIENCES IN IBRI
                    </option>
                    <option value="COLLEGE OF APPLIED SCIENCES IN NIZWA">
                      COLLEGE OF APPLIED SCIENCES IN NIZWA
                    </option>
                    <option value="COLLEGE OF APPLIED SCIENCES IN RUSTAQ">
                      COLLEGE OF APPLIED SCIENCES IN RUSTAQ
                    </option>
                    <option value="COLLEGE OF APPLIED SCIENCES IN SALALAH">
                      COLLEGE OF APPLIED SCIENCES IN SALALAH
                    </option>
                    <option value="COLLEGE OF APPLIED SCIENCES IN SOHAR">
                      COLLEGE OF APPLIED SCIENCES IN SOHAR
                    </option>
                    <option value="COLLEGE OF APPLIED SCIENCES IN SUR">
                      COLLEGE OF APPLIED SCIENCES IN SUR
                    </option>
                    <option value="COLLEGE OF BANKING & FINANCIAL STUDIES">
                      COLLEGE OF BANKING &amp; FINANCIAL STUDIES
                    </option>
                    <option value="COLLEGE OF SHARIA SCIENCES">
                      COLLEGE OF SHARIA SCIENCES
                    </option>
                    <option value="COMMAND AND STAFF COLLEGE">
                      COMMAND AND STAFF COLLEGE
                    </option>
                    <option value="DHOFAR UNIVERSITY">DHOFAR UNIVERSITY</option>
                    <option value="GERMAN UNIVERSITY OF TECHNOLOGY IN OMAN">
                      GERMAN UNIVERSITY OF TECHNOLOGY IN OMAN
                    </option>
                    <option value="GLOBAL COLLEGE OF ENGINEERING AND TECHNOLOGY">
                      GLOBAL COLLEGE OF ENGINEERING AND TECHNOLOGY
                    </option>
                    <option value="GULF COLLEGE">GULF COLLEGE</option>
                    <option value="HIGHER JUDICIAL INSTITUTE">
                      HIGHER JUDICIAL INSTITUTE
                    </option>
                    <option value="HIGHER TECHNICAL COLLEGE">
                      HIGHER TECHNICAL COLLEGE
                    </option>
                    <option value="IBRA COLLEGE OF TECHNOLOGY">
                      IBRA COLLEGE OF TECHNOLOGY
                    </option>
                    <option value="IBRA NURSING INSTITUTE">
                      IBRA NURSING INSTITUTE
                    </option>
                    <option value="IBRI VOCATIONAL COLLEGE">
                      IBRI VOCATIONAL COLLEGE
                    </option>
                    <option value="INSTITUTE OF TOPOGRAPHICAL SCIENCES">
                      INSTITUTE OF TOPOGRAPHICAL SCIENCES
                    </option>
                    <option value="INTERNATIONAL COLLEGE OF ENGINEERING & MANAGEMENT">
                      INTERNATIONAL COLLEGE OF ENGINEERING &amp; MANAGEMENT
                    </option>
                    <option value="INTERNATIONAL MARITIME COLLEGE OMAN">
                      INTERNATIONAL MARITIME COLLEGE OMAN
                    </option>
                    <option value="MAJAN COLLEGE">MAJAN COLLEGE</option>
                    <option value="MAZOON COLLEGE">MAZOON COLLEGE</option>
                    <option value="MIDDLE EAST COLLEGE">
                      MIDDLE EAST COLLEGE
                    </option>
                    <option value="MILITARY TECHNICAL COLLEGE">
                      MILITARY TECHNICAL COLLEGE
                    </option>
                    <option value="MODERN COLLEGE OF BUSINESS & SCIENCE">
                      MODERN COLLEGE OF BUSINESS &amp; SCIENCE
                    </option>
                    <option value="MUSCAT COLLEGE">MUSCAT COLLEGE</option>
                    <option value="MUSCAT NURSING INSTITUTE">
                      MUSCAT NURSING INSTITUTE
                    </option>
                    <option value="MUSCAT UNIVERSITY">MUSCAT UNIVERSITY</option>
                    <option value="MUSSANAH COLLEGE OF TECHNOLOGY">
                      MUSSANAH COLLEGE OF TECHNOLOGY
                    </option>
                    <option value="NATIONAL SURVEY AUTHORITY">
                      NATIONAL SURVEY AUTHORITY
                    </option>
                    <option value="NIZWA COLLEGE OF TECHNOLOGY">
                      NIZWA COLLEGE OF TECHNOLOGY
                    </option>
                    <option value="NIZWA UNIVERSITY">NIZWA UNIVERSITY</option>
                    <option value="NORTH BATINAH NURSING INSTITUTE">
                      NORTH BATINAH NURSING INSTITUTE
                    </option>
                    <option value="NURSING INSTITUTE">NURSING INSTITUTE</option>
                    <option value="National College of Automative Technology">
                      National College of Automative Technology
                    </option>
                    <option value="OMAN COLLEGE OF HEALTH SCIENCES">
                      OMAN COLLEGE OF HEALTH SCIENCES
                    </option>
                    <option value="OMAN COLLEGE OF MANAGEMENT & TECHNOLOGY">
                      OMAN COLLEGE OF MANAGEMENT &amp; TECHNOLOGY
                    </option>
                    <option value="OMAN DENTAL COLLEGE">
                      OMAN DENTAL COLLEGE
                    </option>
                    <option value="OMAN HEALTH INFORMATION MANAGEMENT INSTITUTE">
                      OMAN HEALTH INFORMATION MANAGEMENT INSTITUTE
                    </option>
                    <option value="OMAN MEDICAL COLLEGE">
                      OMAN MEDICAL COLLEGE
                    </option>
                    <option value="OMAN PHARMACY INSTITUTE">
                      OMAN PHARMACY INSTITUTE
                    </option>
                    <option value="OMAN SPECIALIZED NURSING INSTITUTE">
                      OMAN SPECIALIZED NURSING INSTITUTE
                    </option>
                    <option value="OMAN TOURISM COLLEGE">
                      OMAN TOURISM COLLEGE
                    </option>
                    <option value="RUSTAQ NURSING INSTITUTE">
                      RUSTAQ NURSING INSTITUTE
                    </option>
                    <option value="SAHAM VOCATIONAL COLLEGE">
                      SAHAM VOCATIONAL COLLEGE
                    </option>
                    <option value="SALALAH COLLEGE OF TECHNOLOGY">
                      SALALAH COLLEGE OF TECHNOLOGY
                    </option>
                    <option value="SALALAH NURSING INSTITUTE">
                      SALALAH NURSING INSTITUTE
                    </option>
                    <option value="SALALAH VOCATIONAL COLLEGE">
                      SALALAH VOCATIONAL COLLEGE
                    </option>
                    <option value="SCIENTIFIC COLLEGE OF DESIGN">
                      SCIENTIFIC COLLEGE OF DESIGN
                    </option>
                    <option value="SEEB VOCATIONAL COLLEGE3">
                      SEEB VOCATIONAL COLLEGE
                    </option>
                    <option value="SHINAS COLLEGE OF TECHNOLOGY">
                      SHINAS COLLEGE OF TECHNOLOGY
                    </option>
                    <option value="SHINAS VOCATIONAL COLLEGE">
                      SHINAS VOCATIONAL COLLEGE
                    </option>
                    <option value="SOHAR NURSING INSTITUTE">
                      SOHAR NURSING INSTITUTE
                    </option>
                    <option value="SOHAR UNIVERSITY">SOHAR UNIVERSITY</option>
                    <option value="SULTAN QABOOS ACADEMY FOR POLICE SCIENCES">
                      SULTAN QABOOS ACADEMY FOR POLICE SCIENCES
                    </option>
                    <option value="SULTAN QABOOS AIR ACADEMY">
                      SULTAN QABOOS AIR ACADEMY
                    </option>
                    <option value="SULTAN QABOOS AIR COMMAND">
                      SULTAN QABOOS AIR COMMAND
                    </option>
                    <option value="SULTAN QABOOS UNIVERSITY">
                      SULTAN QABOOS UNIVERSITY
                    </option>
                    <option value="SUR NURSING INSTITUTE">
                      SUR NURSING INSTITUTE
                    </option>
                    <option value="SUR UNIVERSITY COLLEGE">
                      SUR UNIVERSITY COLLEGE
                    </option>
                    <option value="SUR VOCATIONAL COLLEGE">
                      SUR VOCATIONAL COLLEGE
                    </option>
                    <option value="TECHNICAL COLLEGE">TECHNICAL COLLEGE</option>
                    <option value="TEST UNIVERSITY">TEST UNIVERSITY</option>
                    <option value="THE HIGHER INSTITUTE FOR HEALTH SPECIALIZATIONS">
                      THE HIGHER INSTITUTE FOR HEALTH SPECIALIZATIONS
                    </option>
                    <option value="WALJAT COLLEGE OF APPLIED SCIENCES">
                      WALJAT COLLEGE OF APPLIED SCIENCES
                    </option>
                    <option value="الكلية الفنية الصناعية">
                      الكلية الفنية الصناعية
                    </option>
                    <option value="الكلية الفنية الصناعية بابراء">
                      الكلية الفنية الصناعية بابراء
                    </option>
                    <option value="الكلية المتوسطة للمعلمات بالخوير">
                      الكلية المتوسطة للمعلمات بالخوير
                    </option>
                    <option value="الكلية المتوسطة للمعلمات بالرستاق">
                      الكلية المتوسطة للمعلمات بالرستاق
                    </option>
                    <option value="الكلية المتوسطة للمعلمات بعبري">
                      الكلية المتوسطة للمعلمات بعبري
                    </option>
                    <option value="الكلية المتوسطة للمعلمات بمسفط">
                      الكلية المتوسطة للمعلمات بمسفط
                    </option>
                    <option value="الكلية المتوسطة للمعلمات والمعلمين بصلالة">
                      الكلية المتوسطة للمعلمات والمعلمين بصلالة
                    </option>
                    <option value="الكلية المتوسطة للمعلمين بالرستاق">
                      الكلية المتوسطة للمعلمين بالرستاق
                    </option>
                    <option value="الكلية المتوسطة للمعلمين بالقرم">
                      الكلية المتوسطة للمعلمين بالقرم
                    </option>
                    <option value="الكلية المتوسطة للمعلمين بصحار">
                      الكلية المتوسطة للمعلمين بصحار
                    </option>
                    <option value="الكلية المتوسطة للمعلمين بصور">
                      الكلية المتوسطة للمعلمين بصور
                    </option>
                    <option value="الكلية المتوسطة للمعلمين بمسفط">
                      الكلية المتوسطة للمعلمين بمسفط
                    </option>
                    <option value="الكلية المتوسطة للمعلمين بنزوى">
                      الكلية المتوسطة للمعلمين بنزوى
                    </option>
                    <option value="كلية التربية بالرستاق">
                      كلية التربية بالرستاق
                    </option>
                    <option value="كلية التربية بصحار">
                      كلية التربية بصحار
                    </option>
                    <option value="كلية التربية بصلالة">
                      كلية التربية بصلالة
                    </option>
                    <option value="كلية التربية بصور">كلية التربية بصور</option>
                    <option value="كلية التربية بعبري">
                      كلية التربية بعبري
                    </option>
                    <option value="كلية التربية بنزوى">
                      كلية التربية بنزوى
                    </option>
                  </select>
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="collage">Collage</label>
                  <input
                    type="text"
                    id="collage"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="mainMajor">Main Major</label>
                  <input
                    type="text"
                    id="mainMajor"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="subMajor">Sub Major</label>
                  <input
                    type="text"
                    id="subMajor"
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
                  <label htmlFor="studyPeriod">Study Period</label>
                  <input
                    type="text"
                    id="studyPeriod"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="expGradDate">Exp. Grad Date</label>
                  <input
                    type="text"
                    id="expGradDate"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="academicYear">Academic Year</label>
                  <input
                    type="text"
                    id="academicYear"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <label>Start Date</label>
                <DatePicker
                  showPopperArrow={false}
                  selected={this.state.startDate}
                  onChange={this.changestartDate}
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Contact Information</legend>
            <div class="row">
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="omanMobileNo">Oman Mobile Number</label>
                  <input
                    type="tel"
                    id="omanMobileNo"
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
                    id="region"
                    onChange={this.handleChange}
                  >
                    <option selected="selected" value="" disabled>
                      Select Oman Region
                    </option>

                    <option value="AL Buraimi Governorate">
                      AL Buraimi Governorate
                    </option>
                    <option value="Al wsta Governorate">
                      Al wsta Governorate
                    </option>
                    <option value="Dahira Governorate">
                      Dahira Governorate
                    </option>
                    <option value="Dakhlia Governorate">
                      Dakhlia Governorate
                    </option>
                    <option value="Dhofar Governorate">
                      Dhofar Governorate
                    </option>
                    <option value="Governorate of North Sharqia">
                      Governorate of North Sharqia
                    </option>
                    <option value="Governorate of North Al Batinah">
                      Governorate of North Al Batinah
                    </option>
                    <option value="Governorate of South AL Batinah">
                      Governorate of South AL Batinah
                    </option>
                    <option value="Governorate of South Sharqia">
                      Governorate of South Sharqia
                    </option>
                    <option value="Mosndam Governorate">
                      Mosndam Governorate
                    </option>
                    <option value="Muscat Governorate">
                      Muscat Governorate
                    </option>
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
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    id="postalCode"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s3">
                <div className="input-field">
                  <label htmlFor="poBox">PO Box</label>
                  <input type="text" id="poBox" onChange={this.handleChange} />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="guardianName"> Guardian Name</label>
                  <input
                    type="text"
                    id="guardianName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="guardianAddress"> Guardian Address</label>
                  <input
                    type="text"
                    id="guardianAddress"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <labe> Guardian Relationship</labe>
                  <select
                    class="browser-default"
                    id="guardianRelationship"
                    onChange={this.handleChange}
                  >
                    <option selected="selected" value="" disabled>
                      Choose Guardian Relationship
                    </option>

                    <option value="9">Father</option>
                    <option selected="selected" value="10">
                      Mother
                    </option>
                    <option value="Son">Son</option>
                    <option value="Husband">Husband</option>
                    <option value="Brother">Brother</option>
                    <option value="Uncle">Uncle</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Wife">Wife</option>
                    <option value="Grandfather">Grandfather</option>
                    <option value="Grandmother">Grandmother</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="guardianMobileNo">
                    Guardian Mobile Number In Oman
                  </label>
                  <input
                    type="text"
                    id="guardianMobileNo"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="guardianWorkLoc">
                    Guardian Work Location
                  </label>
                  <input
                    type="text"
                    id="guardianWorkLoc"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col s4">
                <div className="input-field">
                  <label htmlFor="guardianWorkNo">Guardian Work Number</label>
                  <input
                    type="tel"
                    id="guardianWorkNo"
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
    createApplicationForm: formDetails =>
      dispatch(createApplicationForm(formDetails))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantForm);
