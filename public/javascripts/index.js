var b = new EventSource("/events");
b.addEventListener("hello", a => {
  console.log(a);
});
