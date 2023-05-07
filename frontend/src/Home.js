import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    

    const razorpayKey = await axios.get("http://localhost:4000/api/getKey");
    const rzKey = razorpayKey.data.key;

    const PaymentData = await axios.post(
      "http://localhost:4000/api/checkout",
      amount
    );

    const paymentFullInfo = PaymentData.data.data
    

    const options = {
      rzKey,
      amount: paymentFullInfo.amount,
      currency: "INR",
      name: "Pankaj Sharma",
      description: "Test Transaction",
      image:
        "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80",
      order_id: paymentFullInfo.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
    
  };
  return (
    <>
      <Box>
        <Stack
          h={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Card
            amount={5000}
            img={
              "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80"
            }
            checkoutHandler={checkoutHandler}
          ></Card>
          <Card
            amount={5000}
            img={
              "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80"
            }
            checkoutHandler={checkoutHandler}
          ></Card>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
