import"@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from"@testing-library/react";
import Home from '../page';
 
describe('Home', () => {
  it('renders a Home Page', () => {
    render(<Home />);
  });
});

describe('Home', () => {
    beforeEach(() => {
      render(<Home />);
    });
    it('Patient Name should be in the document', () => {
      const patientName = screen.getByPlaceholderText("Patient Name")
      expect(patientName).toBeInTheDocument();
      expect(patientName).toHaveValue('');
    });

    it('age should be in the document', () => {
      const age = screen.getByPlaceholderText('Age');
      expect(age).toBeInTheDocument();
    });

    it('age should not be in the document', () => {
      const age = screen.getByPlaceholderText('Age');
      expect(age).toBeInTheDocument();
    });

    it('age should be in the document', () => {
      const company = screen.getByPlaceholderText('Company');
      expect(company).toBeInTheDocument();
    });

    it('age should be in the document', () => {
      const city = screen.getByPlaceholderText('City');
      expect(city).toBeInTheDocument();
    });

    it('Vision Defect should be in the document', () => {
      const visionDefect = screen.getByPlaceholderText('Vision Defect');
      expect(visionDefect).toBeInTheDocument();
    });

    it('submit button should be in the document', () => {
      const submitButton = screen.getByRole('button');
      expect(submitButton).toHaveClass("btn");
    });
});
