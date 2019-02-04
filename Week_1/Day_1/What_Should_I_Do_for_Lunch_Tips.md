### Tips

Try experimenting with the comparison operators (`<`, `>`, `===`, etc.) in the node REPL, which you can launch using the `node` command in Vagrant.

Work on your code iteratively – that means in small pieces.

To help you figure out how to use `hungry` and `availableTime` inside your function, try outputting their values to the Terminal as follows.

```javascript

function whatToDoForLunch(hungry, availableTime) {
  if (hungry) {
    if (availableTime < 20) {
      console.log("Pick something and eat at the lab/kitchen");
    } else if (availableTime >= 20 && availableTime <= 30) {
      console.log("You deserve a break at Gastown");
    } else if (availableTime > 30) {
      console.log ("Reconsider because it's a bootcamp");
    }
  } else {
    console.log("wait Until Hungry");
  }
}
```
