enum requestStatus {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted',
}

type data = {
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: requestStatus;
};

async function getFaqs(req: {
  topicId: number;
  status: requestStatus;
}): Promise<data[]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data: data[] = await res.json();
  return data;
}
