const handleClick = async (buttonId: string) => {
   const time = new Date().toLocaleString("sv-SE", {
      hour12: false,
      timeZoneName: undefined,
   });
   console.log("Time:", time);
   const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/landing", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
      },
      body: JSON.stringify({
         action: buttonId,
         timestamp: time,
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
