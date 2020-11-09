import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const databseURL = "https://wordcloud-dd19a.firebaseio.com/";

class Words extends Component {
  constructor() {
    super();

    this.state = {
      words: null,
    };
  }

  _get = () => {
    fetch(`${databseURL}/words.json`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }

        return res.json();
      })
      .then((response) => this.setState({ words: response }));
  };

  componentDidMount = () => {
    this._get();
  };

  render() {
    const { words } = this.state;

    return (
      <div>
        {words &&
          words.map((word, idx) => {
            return (
              <Card key={idx}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    가중치 : {word.weight}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {word.word}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </div>
    );
  }
}

export default Words;
