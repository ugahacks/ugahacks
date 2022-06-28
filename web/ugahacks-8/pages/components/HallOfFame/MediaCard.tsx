import React, { ReactElement } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface MediaCardProps {
  teamImage: string;
  placement: string;
  teamName: string;
  link: string;
  buttonText: string;
}

const CardButton = withStyles({
  root: {
    width: "250px",
    paddingLeft: "15px",
    paddingRight: "15px",
    fontSize: "1.1em",
    fontFamily: "Poppins",
    borderRadius: "50px",
    textAlign: "center",
    color: "#42885a",
  },
})(Button);

export default function MediaCard(props: MediaCardProps): ReactElement {
  return (
    <Card className="card-container">
      <CardActionArea>
        <CardMedia
          className="card-pic"
          image={props.teamImage}
          title="Winner"
        />
        <CardContent className="card-text-container">
          <Typography variant="h6" component="h6">
            {props.placement}
          </Typography>
          <Typography variant="body1" component="h6">
            {props.teamName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-action-container">
        <CardButton
          variant="contained"
          size="small"
          color="primary"
          href={props.link}
        >
          <Typography variant="subtitle1" component="h6">
            {props.buttonText}
          </Typography>
        </CardButton>
      </CardActions>
    </Card>
  );
}
