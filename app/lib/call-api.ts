const handleClick = async (buttonId: string) => {
   const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/landing", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
      },
      body: JSON.stringify({
         action: buttonId,
         timestamp: new Date().toISOString(),
         referer: document.referrer,
      }),
   });

   const { success, message } = await response.json();
   if (success) {
      console.log("Click tracked successfully");
      return;
   }
   console.error("Error tracking click:", message);
};

export default handleClick;
