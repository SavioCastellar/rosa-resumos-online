
import { supabase } from '@/integrations/supabase/client';

/**
 * Fetches all summaries from the database
 */
export const getAllSummaries = async () => {
  const { data, error } = await supabase
    .from('summaries')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching summaries:', error);
    throw error;
  }
  
  return data || [];
};

/**
 * Fetches a summary by its ID
 */
export const getSummaryById = async (id: string) => {
  const { data, error } = await supabase
    .from('summaries')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching summary with id ${id}:`, error);
    throw error;
  }
  
  return data;
};

/**
 * Creates a new summary
 */
export const createSummary = async (summaryData: any) => {
  const { pdfFile, ...summaryInfo } = summaryData;
  
  // First, create the summary entry
  const { data, error } = await supabase
    .from('summaries')
    .insert([{ ...summaryInfo, has_pdf: Boolean(pdfFile) }])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating summary:', error);
    throw error;
  }
  
  // If there's a PDF file, upload it
  if (pdfFile && data?.id) {
    const filePath = `${data.id}/${pdfFile.name}`;
    const { error: uploadError } = await supabase.storage
      .from('summary_pdfs')
      .upload(filePath, pdfFile, {
        cacheControl: '3600',
        upsert: true
      });
    
    if (uploadError) {
      console.error('Error uploading PDF:', uploadError);
      throw uploadError;
    }
  }
  
  return data;
};

/**
 * Updates an existing summary
 */
export const updateSummary = async (id: string, summaryData: any) => {
  const { pdfFile, ...summaryInfo } = summaryData;
  
  // First update the summary entry
  const { data, error } = await supabase
    .from('summaries')
    .update({ 
      ...summaryInfo, 
      has_pdf: summaryInfo.has_pdf || Boolean(pdfFile),
      updated_at: new Date()
    })
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating summary with id ${id}:`, error);
    throw error;
  }
  
  // If there's a new PDF file, upload it
  if (pdfFile && id) {
    const filePath = `${id}/${pdfFile.name}`;
    const { error: uploadError } = await supabase.storage
      .from('summary_pdfs')
      .upload(filePath, pdfFile, {
        cacheControl: '3600',
        upsert: true
      });
    
    if (uploadError) {
      console.error('Error uploading PDF:', uploadError);
      throw uploadError;
    }
  }
  
  return data;
};

/**
 * Deletes a summary by its ID
 */
export const deleteSummary = async (id: string) => {
  // Delete the summary entry
  const { error } = await supabase
    .from('summaries')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting summary with id ${id}:`, error);
    throw error;
  }
  
  // Delete any associated files
  const { error: storageError } = await supabase.storage
    .from('summary_pdfs')
    .remove([`${id}`]);
  
  if (storageError) {
    console.error(`Error deleting PDF files for summary with id ${id}:`, storageError);
    // We don't throw here as the summary was successfully deleted
    // and the storage error might be because there were no files
  }
  
  return true;
};

/**
 * Gets the download URL for a summary's PDF
 */
export const getSummaryPdfUrl = async (id: string, fileName: string) => {
  const { data } = await supabase.storage
    .from('summary_pdfs')
    .getPublicUrl(`${id}/${fileName}`);
  
  return data.publicUrl;
};
