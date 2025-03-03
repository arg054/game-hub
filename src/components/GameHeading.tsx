import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuerry: GameQuery;
}

const GameHeading = ({ gameQuerry }: Props) => {
  const heading = `${gameQuerry.platform?.name || ""} ${
    gameQuerry.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
