import React from 'react';
import { Box, Typography, Link, Accordion, AccordionSummary, AccordionDetails, List, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

function Footer() {
  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={footerVariants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Box
        component="footer"
        sx={{
          maxWidth: '99%',
          backgroundColor: '#6A1B9A',
          margin: '8px',
          borderRadius: '24px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          p: 2,
          mt: 4,
        }}
      >
        {/* Expandable Resources Menu */}
        <Accordion
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: '#fff',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
            aria-controls="resources-content"
            id="resources-header"
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Addiction Recovery Resources
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem disableGutters>
                <Link href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
                  SAMHSA National Helpline
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link href="https://www.recovery.org/" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
                  Recovery.org
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link href="https://www.addictioncenter.com/" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
                  Addiction Center
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link href="https://www.alcohol.org/" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
                  Alcohol.org
                </Link>
              </ListItem>
              <ListItem disableGutters>
                <Link href="https://www.drugabuse.gov/" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
                  NIDA: Drug Abuse Information
                </Link>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* About Me Section */}
        <Box sx={{ mt: 2, color: '#fff' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            About Me - Alex S.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Hi, I’m Alex. I’m passionate about helping others overcome addiction and improve their lives.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <Link href="https://www.placeholder.com/" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
              My Story
            </Link>
            {' | '}
            <Link href="https://www.placeholder.com/" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
              Contact Me
            </Link>
          </Typography>
        </Box>

        {/* Copyright */}
        <Box sx={{ mt: 2, textAlign: 'center', color: '#fff' }}>
          <Typography variant="caption">
            © {new Date().getFullYear()} Unbound. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Footer;
