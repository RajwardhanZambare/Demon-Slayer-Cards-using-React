import Card from './components/Card';
function App() {
    const demonSlayerCharacters = [
        {
            name: "Giyu Tomioka",
            age: 21,
            breathingStyle: "Water Breathing",
            rank: "Hashira",
            image: "https://i.pinimg.com/1200x/51/86/02/5186021c9eba35710177f25cc17f0031.jpg"
        },
        {
            name: "Shinobu Kocho",
            age: 18,
            breathingStyle: "Insect Breathing",
            rank: "Hashira",
            image: "https://i.pinimg.com/736x/db/cf/ae/dbcfae131f54ad10eea5abeb612bf5ad.jpg"
        },
        {
            name: "Kyojuro Rengoku",
            age: 20,
            breathingStyle: "Flame Breathing",
            rank: "Hashira",
            image: "https://i.pinimg.com/736x/52/7f/f4/527ff417a2b8ed3381276dfb0f80a2f9.jpg"
        },
        {
            name: "Tengen Uzui",
            age: 23,
            breathingStyle: "Sound Breathing",
            rank: "Hashira",
            image: "https://i.pinimg.com/736x/33/ef/07/33ef07083eb82a6e314b32b2d6e72295.jpg"
        },
        {
            name: "Mitsuri Kanroji",
            age: 19,
            breathingStyle: "Love Breathing",
            rank: "Hashira",
            image: "https://i.pinimg.com/736x/27/c2/32/27c23289f6f5ddaf34901bab70ec890a.jpg"
        },
        {
            name: "Muichiro Tokito",
            age: 14,
            breathingStyle: "Mist Breathing",
            rank: "Hashira",
            image: "https://i.pinimg.com/736x/1a/1a/61/1a1a616aaa64a38cc0cded5d5dfe6e29.jpg"
        },
        {
            name: "Gyomei Himejima",
            age: 27,
            breathingStyle: "Stone Breathing",
            rank: "Hashira",
            image: "https://i.pinimg.com/1200x/be/8b/a8/be8ba8335483ba23256c11d6392f31e0.jpg"
        },
        {
            name: "Sanemi Shinazugawa",
            age: 21,
            breathingStyle: "Wind Breathing",
            rank: "Hashira",
            image: "https://i.pinimg.com/736x/d9/a3/d7/d9a3d75d31d41de1e9d503fb0e415adc.jpg"
        },
        {
            name: "Obanai Iguro",
            age: 21,
            breathingStyle: "Serpent Breathing",
            rank: "Hashira",
            image: "https://i.pinimg.com/736x/63/06/a1/6306a13b005fa5f01610c7ef13711885.jpg"
        },

        {
            name: "Kamado Tanjiro",
            age: 15,
            breathingStyle: "Sun Breathing",
            rank: "Hanoe",
            image:  "https://i.pinimg.com/736x/c8/c2/61/c8c2619cce56bee8a315c72910537ce5.jpg"
        },
        {
            name: "Agatsuma Zenitsu",
            age: 16,
            breathingStyle: "Thunder Breathing",
            rank: "Hanoe",
            image: "https://i.pinimg.com/736x/0a/0d/0b/0a0d0bc31207f8cf27d7e8a729560c96.jpg"
        },
        {
            name: "Hashibira Inosuke",
            age: 15,
            breathingStyle: "Beast Breathing",
            rank: "Hanoe",
            image: "https://i.pinimg.com/736x/dd/24/ee/dd24ee4541ad78b6cfd07822431dfc24.jpg"
        }
    ];
    return (
        <>
            <div className="parent">
                {demonSlayerCharacters.map(function (element, key) {
                    return <Card key={key} name={element.name} age={element.age} breathingStyle={element.breathingStyle} rank={element.rank} image={element.image} />
                })}
            </div>
        </>
    )
}
export default App;