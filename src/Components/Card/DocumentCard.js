import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { motion } from "framer-motion";

export default function DocumentCard(props) {
  const bgColor = props.type == "personal" ? "skyblue" : "green";
  const emoji = props.type == "personal" ? "👒" : "🎓";
  return (
    <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring'}}
        sx={{
            display: "flex",
            flexDirection: "colum"
        }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: "380px",
          height: "300px",
          alignSelf: "center",
          margin: "auto",
        }}
      >
        <CardMedia style={{ backgroundColor: bgColor, minHeight: "50%" }}>
          <Typography sx={{ fontSize: 96, textAlign: "center" }}>
            {emoji}
          </Typography>
        </CardMedia>

        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: 24 }}>{props.title}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
