class MessagesController < ApplicationController
    def index
        @messages = Message.all
    end
    
    def show
        @message = Message.find(params[:id])
    end

    def new
    end
    def create
        @message = Message.new(params.require(:message).permit(:text))
        @message.save 
        redirect_back(fallback_location: messages_path)
    end
    def destroy
        @message = Message.find(params[:id])
        @message.destroy
        redirect_back(fallback_location: messages_path)
    end
    
    private
        def article_params
            params.require(:message).permit(:text)
        end
        
end
