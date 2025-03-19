
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload, CheckCircle, AlertTriangle, File } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      validateAndSetFile(selectedFile);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    // Check file type (PDF, DOCX, etc.)
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(selectedFile.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or DOCX file",
        variant: "destructive"
      });
      return;
    }

    // Check file size (5MB max)
    if (selectedFile.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 5MB",
        variant: "destructive"
      });
      return;
    }

    setFile(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const simulateUpload = () => {
    if (!file) return;
    
    setUploading(true);
    setUploadStatus('uploading');
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploadStatus('success');
          toast({
            title: "Upload complete",
            description: "Your resume has been uploaded successfully",
          });
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const getFileIcon = () => {
    if (!file) return null;
    
    const fileType = file.name.split('.').pop()?.toLowerCase();
    
    switch (fileType) {
      case 'pdf':
        return <div className="h-12 w-10 bg-red-500/10 rounded flex items-center justify-center"><File className="h-6 w-6 text-red-500" /></div>;
      case 'doc':
      case 'docx':
        return <div className="h-12 w-10 bg-blue-500/10 rounded flex items-center justify-center"><File className="h-6 w-6 text-blue-500" /></div>;
      default:
        return <div className="h-12 w-10 bg-gray-500/10 rounded flex items-center justify-center"><File className="h-6 w-6 text-gray-500" /></div>;
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Upload Your Resume</CardTitle>
        <CardDescription>
          Support for PDF, DOCX (Max 5MB)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-lg p-6 transition-all ${
            isDragging ? "border-primary bg-primary/5" : "border-border"
          } ${file ? "bg-secondary/50" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center text-center">
            {!file && (
              <>
                <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-1">Drag and drop your resume</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  or click to browse files
                </p>
              </>
            )}
            
            {file && (
              <div className="w-full">
                <div className="flex items-center space-x-3 mb-3">
                  {getFileIcon()}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  {uploadStatus === 'success' && (
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  )}
                  {uploadStatus === 'error' && (
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  )}
                </div>
                
                {uploadStatus === 'uploading' && (
                  <Progress value={uploadProgress} className="h-1.5 mb-2" />
                )}
              </div>
            )}
            
            <input
              type="file"
              id="resume-upload"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
            <label htmlFor="resume-upload">
              <Button 
                variant={file ? "outline" : "default"} 
                className={`mt-2 ${file ? "w-auto" : "w-full"}`}
                size={file ? "sm" : "default"}
                type="button"
                disabled={uploading}
              >
                {file ? "Change File" : "Select File"}
              </Button>
            </label>
          </div>
        </div>
      </CardContent>
      
      {file && (
        <CardFooter className="flex justify-end">
          <Button 
            onClick={simulateUpload} 
            disabled={uploading || uploadStatus === 'success'}
          >
            {uploadStatus === 'success' ? "Uploaded" : "Upload Resume"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
