import { useEffect, useState } from "react";
import { SiparisVer, Sonuc, SonucBaslik, Tutar } from "../styles";
import AmountDetail from "./AmountDetail";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Amount(props) {
    const navigate = useNavigate();

    const { price, selectedIngredientsState, pizzaNumber, CheckedSize, errorIngredientsState, pizzaName, selectedThickness, NameSurnameState } = props;


    const [isValid, setIsValid] = useState(false);
    const [fullData, setFullData] = useState({
        pizzaisim: pizzaName,
        boyut: "",
        kalınlık: "",
        malzemeler: [],
        sayı: 1,
        tutar: 0,
        not: {
            isim: "",
            soyisim: "",
            metin: ""
        }



        
    })

    const selectedTotalAmountCalc = () => {
        return (selectedIngredientsState.length * 5) * pizzaNumber
    }

    
    const handleClick = () => {
        console.log("Gönderilen Veriler:", fullData);
    }

    useEffect(() => {
        if (errorIngredientsState.below) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }

    }, [errorIngredientsState])

 
    useEffect(() => {
        setFullData((prevData) => ({
            ...prevData,
            boyut: CheckedSize,
            kalınlık: selectedThickness,
            malzemeler: selectedIngredientsState,
            sayı: String(pizzaNumber),
            tutar: String(finalTotalAmount),
            not: {
                isim: NameSurnameState.name,
                soyisim: NameSurnameState.surname,
                metin: NameSurnameState.note
            }
        }));
    }, [selectedIngredientsState, CheckedSize, NameSurnameState, price, pizzaNumber]);

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://reqres.in/api/pizza",
      fullData,
      {
        headers: { "x-api-key": "reqres-free-v1" }
      }
    );

    console.log(response);

    // Başarılıysa diğer sayfaya yönlendir ve fullData’yı state olarak gönder
    navigate("/siparis-sonucu", { state: fullData });

  } catch (error) {
    console.log(error);
  }
}

    
   const selectedTotalAmount = selectedTotalAmountCalc()
    const finalTotalAmount = Number(price) * pizzaNumber + Number(selectedTotalAmount || 0)
    // console.log(isValid)





//xd

    return (
        
        <Tutar onSubmit={handleSubmit}>
            <Sonuc>
                <SonucBaslik>
                    <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Sipariş Toplamı</h1>
                </SonucBaslik>
                <AmountDetail price={price} selectedIngredientsState={selectedIngredientsState} pizzaNumber={pizzaNumber} selectedTotalAmount={selectedTotalAmount} finalTotalAmount={finalTotalAmount} />
            </Sonuc>
            <SiparisVer style={{ fontWeight: "bold", fontSize: "16px" }} disabled={!isValid} onClick={handleClick}>Sipariş Ver</SiparisVer>
        </Tutar>
    )
}