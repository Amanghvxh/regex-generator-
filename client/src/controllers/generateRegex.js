import axios from "axios";
const generateRegex = async function (
  inputCharValue,
  inputRegexValue,
  language,
  setGeneratedRegexValue,
  setIsSame
) {
  try {
    const reqBody = {
      chracterToRemove: inputCharValue,
      stringToRemoveFrom: inputRegexValue,
      language: language,
    };
    console.log(reqBody);
    const { data } = await axios.post(
      "http://localhost:9000/api/v1/build",
      reqBody
    );
    console.log(data);
    const regex = data.data.match(/\/(.*)\/([a-z]*)/);
    setIsSame(true);
    console.log(regex);
    setGeneratedRegexValue(regex[0] ?? data.data);
  } catch (error) {
    console.log(error);
  }
};
//kjhjkhhkj
export default generateRegex;
