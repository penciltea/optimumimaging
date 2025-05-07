import { Card, CardContent, Typography, Rating, Box } from "@mui/material";

interface ReviewProps { 
    name: string,
    rating: number,
    text: string
}

const ReviewCard = ({ name, rating, text }: ReviewProps) => (
  <Card elevation={2}>
    <CardContent>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
        <Rating value={rating} readOnly />
      </Box>
      <Typography variant="body1" sx={{ mb: 2, textAlign: "center" }}>
        “{text}”
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontStyle: "italic", textAlign: "center", color: "text.secondary" }}
      >
        — {name}
      </Typography>
    </CardContent>
  </Card>
);

export default ReviewCard;
