export default function CreateList() {
  const res = fetch("https://api.instantwebtools.net/v1/airlines")
    .then((res) => res.json())
    .then((json) => json);
  console.log("res :>> ", res);
}
// {
//     "id": 12,
//     "name": "Sri Lankan Airways",
//     "country": "Sri Lanka",
//     "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
//     "slogan": "From Sri Lanka",
//     "head_quaters": "Katunayake, Sri Lanka",
//     "website": "www.srilankaairways.com",
//     "established": "1990"
// }
