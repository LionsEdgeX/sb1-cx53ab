import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { MessageSquare, Heart, Share2, TrendingUp, ChartBar, BookOpen } from 'lucide-react';
import toast from 'react-hot-toast';

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      badge: "Elite Trader"
    },
    content: "Just closed a successful trade on BTC/USDT! Key levels were respected perfectly. Here's my analysis...",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80",
    likes: 128,
    comments: 32,
    shares: 12,
    time: "2 hours ago",
    type: "analysis"
  },
  {
    id: 2,
    author: {
      name: "Michael Scott",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      badge: "Mentor"
    },
    content: "Today's market psychology lesson: Understanding FOMO and how to control it. Remember, missing opportunities is part of trading...",
    likes: 245,
    comments: 56,
    shares: 28,
    time: "4 hours ago",
    type: "education"
  },
  {
    id: 3,
    author: {
      name: "Emma Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      badge: "Risk Manager"
    },
    content: "Weekly market recap: Key levels to watch for next week. Setting up for potential breakout trades...",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    likes: 182,
    comments: 41,
    shares: 15,
    time: "6 hours ago",
    type: "analysis"
  }
];

const CommunityFeed = () => {
  const { isDarkMode } = useTheme();
  const [postContent, setPostContent] = React.useState('');
  const [isPosting, setIsPosting] = React.useState(false);
  const [likedPosts, setLikedPosts] = React.useState<number[]>([]);

  const getPostIcon = (type: string) => {
    switch (type) {
      case 'analysis':
        return <ChartBar className="h-5 w-5 text-blue-500" />;
      case 'education':
        return <BookOpen className="h-5 w-5 text-purple-500" />;
      default:
        return <TrendingUp className="h-5 w-5 text-emerald-500" />;
    }
  };

  const handlePost = () => {
    if (!postContent.trim()) {
      toast.error('Please enter some content');
      return;
    }

    setIsPosting(true);
    // Simulate API call
    setTimeout(() => {
      setIsPosting(false);
      setPostContent('');
      toast.success('Post shared successfully!');
    }, 1000);
  };

  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(prev => prev.filter(id => id !== postId));
      toast('Post unliked', { icon: '💔' });
    } else {
      setLikedPosts(prev => [...prev, postId]);
      toast('Post liked', { icon: '❤️' });
    }
  };

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <div className={`p-6 rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border border-gray-200 dark:border-gray-700`}>
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
            alt="Your avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <input
            type="text"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Share your trading insights..."
            className={`flex-1 px-4 py-2 rounded-lg ${
              isDarkMode
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
            } border focus:outline-none focus:ring-2 focus:ring-gold`}
          />
          <button 
            onClick={handlePost}
            disabled={isPosting || !postContent.trim()}
            className={`px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors ${
              (isPosting || !postContent.trim()) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isPosting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      {posts.map((post) => (
        <div
          key={post.id}
          className={`p-6 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border border-gray-200 dark:border-gray-700`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className={`font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.author.name}
                  </h3>
                  <span className="px-2 py-1 bg-gold/20 text-gold text-xs rounded-full">
                    {post.author.badge}
                  </span>
                </div>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {post.time}
                </p>
              </div>
            </div>
            {getPostIcon(post.type)}
          </div>

          <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {post.content}
          </p>

          {post.image && (
            <div className="mb-4 rounded-xl overflow-hidden">
              <img
                src={post.image}
                alt="Post content"
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <button 
              onClick={() => handleLike(post.id)}
              className={`flex items-center space-x-2 transition-colors ${
                likedPosts.includes(post.id) 
                  ? 'text-red-500' 
                  : 'text-gray-400 hover:text-gold'
              }`}
            >
              <Heart className={`h-5 w-5 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
              <MessageSquare className="h-5 w-5" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors">
              <Share2 className="h-5 w-5" />
              <span>{post.shares}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityFeed;