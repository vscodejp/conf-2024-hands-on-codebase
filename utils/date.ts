export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleString("ja-JP");
};
