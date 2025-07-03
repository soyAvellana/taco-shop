import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function ProfileCard({ name, title, image }) {
  return (
    <Card className="w-64 shadow-lg">
      <CardHeader floated={false} className="h-40">
        <img
          src={image}
          alt={`${name} profile`}
          className="object-contain w-full h-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium text-sm" textGradient>
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProfileCard;
