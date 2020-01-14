const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

process.stdin.on("data", key => {
  if (key === "b") {
    process.stdout.write("\x07");
  }
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (key >= "1" && key <= "9") {
    console.log("setting timer for " + key + " seconds..");
    process.stdout.write("\x07");
  }
});

console.log("after callback");
