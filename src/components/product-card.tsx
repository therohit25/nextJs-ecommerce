import { Box, Card, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({
  imageURL,
  description,
  title,
  id,
}: {
  imageURL: string;
  description: string;
  title: string;
  id: number;
}) => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '20rem',
        height: 'auto',
        borderRadius: 2,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <Box width="100%" height="12rem" position="relative">
        <Image
          src={imageURL}
          alt={title}
          layout="fill"
          objectFit="cover"
          style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
        />
      </Box>
      <Stack
        spacing={1}
        sx={{
          p: 2,
        }}
      >
        <Link href={`/products/${id}`} passHref>
          <Typography
            variant="h6"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontWeight: 'bold',
              color: 'primary.main',
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {title}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontStyle: 'italic',
          }}
        >
          category
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: 'text.primary',
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Card>
  );
};

export default ProductCard;
